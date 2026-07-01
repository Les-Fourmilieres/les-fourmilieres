export type LivingAreaSelectValue =
  | {
      department: null;
      livingArea: null;
    }
  | {
      department: string | null;
      livingArea: null;
    }
  | {
      department: string;
      livingArea: string | null;
    };
