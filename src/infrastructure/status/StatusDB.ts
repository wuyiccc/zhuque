import {create} from 'zustand/react';
import StrConstants from '@/infrastructure/constants/StrConstants';

class StatusDB {
  public static db = create<{
    search: string
    setSearch: (search: string) => void
  }>((set) => ({
    search: StrConstants.EMPTY,
    setSearch: (search) => {
      set({search: search});
    },
  }));
}

export default StatusDB;
