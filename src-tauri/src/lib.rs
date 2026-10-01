use std::fs;
use tauri::Manager;
#[tauri::command]
fn load_state(app: tauri::AppHandle) -> Result<Option<String>, String> {
    let path=app.path().app_data_dir().map_err(|e|e.to_string())?.join("state.json");
    if !path.exists(){return Ok(None)}
    fs::read_to_string(path).map(Some).map_err(|e|e.to_string())
}
#[tauri::command]
fn save_state(app: tauri::AppHandle,state:String) -> Result<(), String> {
    let directory=app.path().app_data_dir().map_err(|e|e.to_string())?;
    fs::create_dir_all(&directory).map_err(|e|e.to_string())?;
    let destination=directory.join("state.json");
    let temporary=directory.join("state.tmp");
    fs::write(&temporary,state).map_err(|e|e.to_string())?;
    fs::rename(temporary,destination).map_err(|e|e.to_string())
}
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run(){tauri::Builder::default().invoke_handler(tauri::generate_handler![load_state,save_state]).run(tauri::generate_context!()).expect("application runtime error")}
