import type { AppData } from '@/domain/models'
const STORAGE_KEY='opensecure.local.v1'
const isTauri=()=>typeof window!=='undefined'&&'__TAURI_INTERNALS__' in window
export const loadData=async(fallback:AppData):Promise<AppData>=>{try{if(isTauri()){const{invoke}=await import('@tauri-apps/api/core');const value=await invoke<string|null>('load_state');return value?JSON.parse(value) as AppData:fallback}const value=localStorage.getItem(STORAGE_KEY);return value?JSON.parse(value) as AppData:fallback}catch{return fallback}}
export const saveData=async(data:AppData)=>{const value=JSON.stringify(data);if(isTauri()){const{invoke}=await import('@tauri-apps/api/core');await invoke('save_state',{state:value});return}localStorage.setItem(STORAGE_KEY,value)}
export const exportData=(data:AppData)=>{const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const anchor=document.createElement('a');anchor.href=url;anchor.download=`opensecure-backup-${new Date().toISOString().slice(0,10)}.json`;anchor.click();URL.revokeObjectURL(url)}
