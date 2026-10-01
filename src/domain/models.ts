export type Priority='low'|'medium'|'high'|'critical'
export type TransactionType='income'|'expense'
export interface Transaction{id:string;date:string;type:TransactionType;account:string;category:string;amount:number;note:string;location:string;version:number;createdAt:string;updatedAt:string}
export interface TransactionVersion extends Transaction{transactionId:string}
export interface Goal{id:string;name:string;target:number;current:number;deadline:string;icon:string}
export interface Investment{id:string;symbol:string;name:string;quantity:number;buyPrice:number;currentPrice:number;purchaseDate:string}
export interface FinanceState{transactions:Transaction[];versions:TransactionVersion[];goals:Goal[];investments:Investment[];monthlyBudget:number}
export interface ChecklistItem{id:string;text:string;done:boolean}
export interface TaskComment{id:string;text:string;author:string;createdAt:string}
export interface TaskCard{id:string;title:string;description:string;priority:Priority;labels:string[];dueDate:string|null;members:string[];checklist:ChecklistItem[];comments:TaskComment[];archived:boolean;createdAt:string;updatedAt:string;dependencies:string[]}
export interface TaskColumn{id:string;name:string;cards:TaskCard[]}
export interface Board{id:string;name:string;favorite:boolean;archived:boolean;columns:TaskColumn[]}
export interface TaskState{boards:Board[];activeBoardId:string|null}
export interface VaultEntry{id:string;service:string;login:string;password:string;notes:string;createdAt:string;updatedAt:string}
export interface VaultEnvelope{salt:string;iv:string;ciphertext:string;verifier:string;iterations:number}
export interface AppData{finance:FinanceState;tasks:TaskState;vault:VaultEnvelope|null;settings:{locale:'pl'|'en';theme:'dark'|'light'|'system';currency:string}}
export const id=()=>crypto.randomUUID()
export const now=()=>new Date().toISOString()
