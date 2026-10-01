<script setup lang="ts">
import { computed, type Component } from 'vue'
import { ArrowDownLeft, ArrowRight, ArrowUpRight, ArrowUpRightFromSquare, Calendar, ChevronRight, Circle, Copy, Download, Eye, EyeOff, Gauge, HeartPulse, KanbanSquare, KeyRound, Landmark, LayoutDashboard, ListChecks, Lock, LockKeyhole, Menu, Orbit, PiggyBank, Plus, PlusCircle, Search, Settings, ShieldCheck, Sparkles, Trash2, TrendingUp, Upload, WalletCards, WifiOff, X } from '@lucide/vue'

const props = withDefaults(defineProps<{ name: string; size?: number }>(), { size: 20 })
const icons: Record<string, Component> = { ArrowDownLeft, ArrowRight, ArrowUpRight, ArrowUpRightFromSquare, Calendar, ChevronRight, Circle, Copy, Download, Eye, EyeOff, Gauge, HeartPulse, KanbanSquare, KeyRound, Landmark, LayoutDashboard, ListChecks, Lock, LockKeyhole, Menu, Orbit, PiggyBank, Plus, PlusCircle, Search, Settings, ShieldCheck, Sparkles, Trash2, TrendingUp, Upload, WalletCards, WifiOff, X }
const icon = computed(() => icons[props.name] ?? Circle)
</script>

<template><component :is="icon" :size="size" aria-hidden="true" /></template>
