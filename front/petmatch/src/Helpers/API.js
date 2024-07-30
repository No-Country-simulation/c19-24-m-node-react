// const baseURL = "https://c19-24-m-node.onrender.com";

export const getPets = async () => {
    try {
        // let url = `${baseURL}/pets`;
        // let url = `http://localhost:8080/pets/`;
        let url = `https://c19-24-m-node.onrender.com/pets/`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.status === "success") return data.payload;
    } catch (err) {
        console.log(err);
    }
};

export const getUserInfo = async (_id) => {
    console.log(_id);
    try {
        // let url = `${baseURL}/pets`;
        // let url = `http://localhost:8080/users}`;
        let url = `https://c19-24-m-node.onrender.com/users/${_id}`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.status === "success") return data.payload;
    } catch (err) {
        console.log(err);
    }
};
