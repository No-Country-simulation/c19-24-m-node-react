const baseURL = "https://c19-24-m-node.onrender.com";

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

export const getUserID = async (_id) => {
    try {
        // let url = `${baseURL}/pets`;
        // let url = `http://localhost:8080/users}`;
        let url = `https://c19-24-m-node.onrender.com/users}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        // if (data.status === "success") return data.payload;
    } catch (err) {
        console.log(err);
    }
};
