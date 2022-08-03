import create, { UseBoundStore, StoreApi } from 'zustand';
import { friends } from './fakeData';

//
// Type definitions
//

export interface User {
  id?: string;
  name?: string;
  avatar?: string;
  status?: 'online' | 'offline' | 'idle';
  email?: string;
  token?: string;
}

export interface PartialUser {
  id?: string;
  name?: string;
  avatar?: string;
  status?: 'online' | 'offline' | 'idle';
}

export interface DrawerStore {
  rightDrawer: boolean;
  toggleRightDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  leftDrawer: boolean;
  toggleLeftDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export interface FriendsStore {
  friends: PartialUser[];
  addFriend: (user: PartialUser) => void;
  removeFriend: (id: string) => void;
  setFriends: (friends: PartialUser[]) => void;
  resetFriends: () => void;
}

export interface TimerStore {
  timer: number;
  setTimer: (timer: number) => void;
  setPaused: (bool: boolean) => void;
  isPaused: boolean;
}

//
//  Data Stores
//

// User
export const useUserStore = create(set => ({
  id: null,
  name: null,
  email: null,
  token: null,
  avatar: null,
  status: 'online',
  setUser: (user: User) => set(state => ({ ...state, ...user })),
  resetUser: () =>
    set(state => ({
      ...state,
      ...{
        id: null,
        name: null,
        email: null,
        token: null,
        avatar: null,
        status: 'online',
      },
    })),
}));

// Drawers
export const useDrawerStore = create(set => ({
  rightDrawer: false,
  toggleRightDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    )
      return;

    set(state => ({ ...state, ...{ rightDrawer: open } }));
  },
  leftDrawer: false,
  toggleLeftDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    )
      return;

    set(state => ({ ...state, ...{ leftDrawer: open } }));
  },
})) as UseBoundStore<StoreApi<DrawerStore>>;

export const useFriendsStore = create(set => ({
  friends: friends,
  setFriends: (friends: PartialUser[]) => set(state => ({ ...state, ...{ friends } })),
  addFriend: (friend: PartialUser) =>
    set(state => ({ ...state, ...{ friends: [...state.friends, friend] } })),
  removeFriend: (id: string) =>
    set(state => ({
      ...state,
      ...{ friends: state.friends.filter(f => f.id !== id) },
    })),
  resetFriends: () => set(state => ({ ...state, ...{ friends: [] } })),
})) as UseBoundStore<StoreApi<FriendsStore>>;

// Extras
export const useGlobalStore = create(set => ({
  quizSession: false,
  setQuizSession: (quizSession: boolean) => set(state => ({ ...state, ...{ quizSession } })),
}));

// Timer store
export const useTimerStore = create(set => ({
  timer: 0,
  setTimer: (timer: number) => set(state => ({ ...state, ...{ timer } })),
  isPaused: false,
  setPaused: (bool: boolean) => set(state => ({ ...state, ...{ isPaused: bool } })),
})) as UseBoundStore<StoreApi<TimerStore>>;

// Theme store
export const useThemeStore = create(set => ({
  theme: 'light',
  setTheme: (theme: 'light' | 'dark') => set(state => ({ ...state, ...{ theme } })),
})) as UseBoundStore<StoreApi<{ theme: 'light' | 'dark' }>>;

export * from './quiz';
