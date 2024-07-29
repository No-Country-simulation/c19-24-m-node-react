const baseURL = "https://c19-24-m-node.onrender.com";

export const getPets = async () => {
    try {
        // let url = `${baseURL}/pets`;
        let url = `http://localhost:8080/pets/petsQuantity/16`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.status === "success") return data.payload;
    } catch (err) {
        console.log(err);
    }
};