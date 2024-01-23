import { setMyProfile } from "../reducers/profileReducer";
const token = process.env.REACT_APP_TOKEN;

export const fetchProfileAction = (idProfile) => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + idProfile, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(setMyProfile(data));
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
