import { TYPES } from "./actions";

export const legWorkout = (state = [], action) => {
  switch (action.type) {
    case TYPES.LEG_POST: {
      let newLegWorkout = [...state];
      action.payload.id = action.id;
      return newLegWorkout.concat(action.payload);
    }
    case TYPES.LEG_ALL: {
      let newLegWorkouts = [...state];
      return newLegWorkouts.concat(action.payload);
    }
    case TYPES.LEG_DELETE: {
      const id = action.id;
      let newLegWorkouts = [...state];
      const index = newLegWorkouts.findIndex(
        legWorkout => id === legWorkout.id
      );
      newLegWorkouts.splice(index, 1);
      return newLegWorkouts;
    }
    case TYPES.LEG_EDIT: {
      const id = action.id;
      let newLegWorkouts = [...state];
      const index = newLegWorkouts.findIndex(
        legWorkout => id === legWorkout.id
      );
      newLegWorkouts[index] = action.payload;
      return newLegWorkouts;
    }
    default:
      return state;
  }
};
