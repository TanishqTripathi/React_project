import React,{ useEffect,useState} from "react";
import Search from "./Search";

function MyComponents(){
    const [data,setdata] = useState(null);
    const [loading,setloading] = useState(true);
    const [error,seterror] = useState(null);
    const [searchTerm,setSearchTerm] = useState("");
    const[filterCategory,setfilterCategory] = useState("");

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response=>{
            if(!response.ok){
                throw new Error("Network response not ok")
            }
            return response.json();
        })
        .then(data=> {
            setdata(data);
            setloading(false);
        })
        .catch(error=>{
            seterror(error);
            setloading(false);
        })
    },[]);

    const category = [...new Set(data.map(items=>items.category))];

    if (loading) return <div>Loading....</div>;
    if (error) return <div>{error.message}</div>;

    const Search_product = data.filter((item)=>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())).
    filter((item)=> filterCategory?item.category===filterCategory:true);

    return(
        <div>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

        {Search_product.map((product)=>(
            <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            </div>
        ))};
            <h1>Api response</h1>
            {}
            <pre>{JSON.stringify(data,null,2)}</pre>
        </div>
    );
}

export default MyComponents;