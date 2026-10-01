import type { Board, TaskCard } from './models'
export const boardProgress=(board:Board)=>{const cards=board.columns.flatMap(c=>c.cards).filter(c=>!c.archived);const done=board.columns.filter(c=>/done|gotowe|ukończone/i.test(c.name)).flatMap(c=>c.cards).filter(c=>!c.archived).length;return cards.length?Math.round(done/cards.length*100):0}
export const checklistProgress=(card:TaskCard)=>card.checklist.length?Math.round(card.checklist.filter(i=>i.done).length/card.checklist.length*100):0
export const isOverdue=(card:TaskCard)=>Boolean(card.dueDate&&!card.archived&&new Date(card.dueDate)<new Date(new Date().toDateString()))
export const searchCards=(board:Board,query:string)=>{const q=query.trim().toLocaleLowerCase();return board.columns.flatMap(column=>column.cards.map(card=>({card,columnId:column.id}))).filter(({card})=>!q||[card.title,card.description,...card.labels,...card.members,...card.comments.map(c=>c.text)].some(v=>v.toLocaleLowerCase().includes(q)))}
