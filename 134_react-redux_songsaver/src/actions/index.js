// deze index registreert de mogelijke acties

export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const addSong = () => {
  return {
    type: "ADD_SONG",
  };
};

/**
 * simpelste vorm:
 *  {
 *  type: "ADD_BUG",
 *  description: "..."
 *  }
 *
 * oorspronkelijke vorm:
 *  {
 *    type: "ADD_BUG",
 *    payload: {
 *      description: "..."
 *    }
 *   }
 *
 */
