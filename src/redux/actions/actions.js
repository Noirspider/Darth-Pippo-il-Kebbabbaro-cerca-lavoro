import { refreshHomePost, setAllPost } from "../reducers/homePageReducer";
import { refreshExperience, setMyExperience, setMyProfile } from "../reducers/profileReducer";
const token = process.env.REACT_APP_TOKEN;
/* FETCH GET PROFILE */
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
/* FETCH PUT PROFILE */
export const fetchPutProfileAction = (newProfileObject) => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProfileObject),
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
/* FETCH GET EXPERIENCE */
export const fetchExpAction = (idProfile) => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + idProfile + "/experiences", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(setMyExperience(data));
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
/* FETCH POST EXPERIENCE */
export const fetchPostExpAction = (idProfile, ExperienceToPost) => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + idProfile + "/experiences", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ExperienceToPost),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(refreshExperience());
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
/* FETCH PUT EXPERIENCE */
export const fetchPutExpAction = (idProfile, idExperience, updatedExperience) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" + idProfile + "/experiences/" + idExperience,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedExperience),
      }
    );

    if (response.ok) {
      const data = await response.json();
      dispatch(refreshExperience());
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
/* FETCH DELETE EXPERIENCE */
export const fetchDeleteExpAction = (idProfile, idExperience) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" + idProfile + "/experiences/" + idExperience,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.ok) {
      /*       const data = await response.json(); */
      dispatch(refreshExperience());
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
/* FETCH GET HOMEPAGE */
export const fetchHomeAction = () => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(setAllPost(data.reverse()));
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
/* FETCH POST HOMEPAGE */
export const fetchPostHomeAction = (myPostToPost) => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myPostToPost),
    });

    if (response.ok) {
      /* const data = await response.json(); */
      dispatch(refreshHomePost());
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
/* FETCH DELETE HOMEPAGE */
export const fetchDeleteHomeAction = (idPost) => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + idPost, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      /*       const data = await response.json(); */
      dispatch(refreshHomePost());
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
/* FETCH PUT HOMEPAGE */
export const fetchPutHomeAction = (idPost, myPostToUpdate) => async (dispatch) => {
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/" + idPost, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(myPostToUpdate),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(refreshHomePost());
    } else {
      throw new Error("Errore nel recupero dei risultati");
    }
  } catch (error) {
    console.error("Errore nel fetch:", error.message);
  }
};
