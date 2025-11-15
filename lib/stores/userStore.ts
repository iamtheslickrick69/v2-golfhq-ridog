import { create } from "zustand";
import { User, TrophyBall } from "@/lib/mock-data/types";
import { currentUser } from "@/lib/mock-data/user-data";

interface UserStore {
  user: User;
  setUser: (user: User) => void;
  updateXP: (amount: number) => void;
  earnTrophyBall: (ballId: string) => void;
  updateHandicap: (newHandicap: number) => void;
  incrementRounds: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: currentUser,
  setUser: (user) => set({ user }),
  updateXP: (amount) =>
    set((state) => ({
      user: {
        ...state.user,
        tourCard: {
          ...state.user.tourCard,
          xp: state.user.tourCard.xp + amount,
        },
      },
    })),
  earnTrophyBall: (ballId) =>
    set((state) => ({
      user: {
        ...state.user,
        achievements: {
          ...state.user.achievements,
          trophyBalls: state.user.achievements.trophyBalls.map((ball) =>
            ball.id === ballId
              ? { ...ball, earned: true, earnedDate: new Date().toISOString().split("T")[0] }
              : ball
          ),
        },
      },
    })),
  updateHandicap: (newHandicap) =>
    set((state) => ({
      user: {
        ...state.user,
        profile: {
          ...state.user.profile,
          handicap: {
            ...state.user.profile.handicap,
            current: newHandicap,
            history: [...state.user.profile.handicap.history, newHandicap],
          },
        },
      },
    })),
  incrementRounds: () =>
    set((state) => ({
      user: {
        ...state.user,
        stats: {
          ...state.user.stats,
          roundsThisYear: state.user.stats.roundsThisYear + 1,
          roundsThisMonth: state.user.stats.roundsThisMonth + 1,
        },
      },
    })),
}));
