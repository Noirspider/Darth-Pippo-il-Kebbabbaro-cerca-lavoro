import { setMyProfile } from "../reducers/profileReducer";

export const fetchProfileAction = (idProfile) => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + idProfile, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmN2YzM2JkNWQxMjAwMTg5MGQ0MGEiLCJpYXQiOjE3MDYwMDAxNzksImV4cCI6MTcwNzIwOTc3OX0.IIKSxnKEJhaMiUIlt7-TdfVKDg3EJXTPvJMYNd7mU_I`,
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
    // Puoi gestire gli errori qui, se necessario
    console.error("Errore nel fetch:", error.message);
  }
};
