import { describe,expect,it } from 'vitest'
import { boardProgress,checklistProgress,searchCards } from '@/domain/tasks'
import type { Board,TaskCard } from '@/domain/models'
const card:TaskCard={id:'c',title:'API payment',description:'Gateway',priority:'high',labels:['backend'],dueDate:null,members:['Ada'],checklist:[{id:'i',text:'Test',done:true},{id:'j',text:'Deploy',done:false}],comments:[],archived:false,createdAt:'',updatedAt:'',dependencies:[]}
const board:Board={id:'b',name:'App',favorite:false,archived:false,columns:[{id:'todo',name:'Todo',cards:[card]},{id:'done',name:'Gotowe',cards:[]}]}
describe('task domain',()=>{it('calculates checklist progress',()=>expect(checklistProgress(card)).toBe(50));it('searches all card fields',()=>expect(searchCards(board,'backend')).toHaveLength(1));it('calculates board progress',()=>expect(boardProgress(board)).toBe(0))})
