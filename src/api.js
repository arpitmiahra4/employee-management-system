const URL = "http://localhost:4000/employee"

export const GetData = ({ FilterByGender, FilterBy, titleSortBy, page, setTotalProduct, limit }) => {
    if (FilterBy !== null) {
        return fetch(`${URL}?department=${FilterBy}&_sort=name&_order=${titleSortBy}&_page=${page}&_limit=${limit}`)
            .then(res => {
                setTotalProduct(+(res.headers.get("X-Total-Count")));
                return res.json();
            });
    };
    if (FilterByGender !== null) {
        return fetch(`${URL}?gender=${FilterByGender}&_sort=name&_order=${titleSortBy}&_page=${page}&_limit=${limit}`)
            .then(res => {
                setTotalProduct(+(res.headers.get("X-Total-Count")));
                return res.json();
            });
    }

    return fetch(`${URL}?_sort=name&_order=${titleSortBy}&_page=${page}&_limit=${limit}`)
        .then(res => {
            setTotalProduct(+(res.headers.get("X-Total-Count")));
            return res.json();
        });
};

export const AddData = (userData) => {
    return fetch(`${URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json());
};

export const DeleteData = (id) => {
    return fetch(`${URL}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(res => res.json());
};

export const UpdateData = (id, newData) => {
    return fetch(`${URL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newData)
    })
        .then(res => res.json());
}
