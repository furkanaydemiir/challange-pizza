import React, { useEffect, useRef, useState } from "react";
import "../css/OrderOptions.css";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SizeSelection from "./OrderOptionComponents/SizeSelection";
import MaterialSelection from "./OrderOptionComponents/MaterialSelection";
import OrderNote from "../components/OrderOptionComponents/OrderNote";
import OrderDetail from "./OrderOptionComponents/OrderDetail";
import { behavior } from "@testing-library/user-event/dist/cjs/event/behavior/registry.js";
function OrderOptions() {
  const MY_API_KEY = import.meta.env.VITE_REQRES_API_KEY;
  const navigate = useNavigate();
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [ingredientState, setIngredientState] = useState([]);
  const [note, setNote] = useState("");
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const ref = useRef();
  const inputRef = useRef();

  const sendSubmit = async () => {
    const payload = [
      {
        pizzaId: crypto.randomUUID(),
        size: size,
        dough: dough,
        ingredientState: ingredientState,
        note: note,
        name: name,
      },
    ];
    try {
      const response = await axios.post(
        "https://reqres.in/api/pizza",
        payload,
        {
          headers: {
            "x-api-key": MY_API_KEY,
          },
        },
      );
      console.log("API YANII:", response.data);
    } catch (error) {
      console.log("Bir hata oluştu", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (size === "") {
      toast.error("Lütfen Boyut Seçimi Yapınız!");
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    } else if (dough === "") {
      toast.error("Lütfen Hamur Seçimi Yapınız!");
      return;
    } else if (ingredientState.length < 4) {
      toast.error("En az 4 malzeme seçmeniz gerekmekte!");
    } else if (name.trim().length === 0) {
      toast.error("Lütfen isminizi girniz!");
      inputRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    } else if (name.trim().length < 3) {
      toast.error("İsim bölümü 3 karakterden az olamaz!");
      inputRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    } else {
      sendSubmit();
      navigate("/SuccessOrder",{
        state:{
          size,
          dough,
          ingredientState,
          note,
          name,
          count
        }
      });
    }
  };

  return (
    
      <form onSubmit={handleSubmit} className="order-form">
      <div ref={ref} className="size-selector">
        <SizeSelection
          dough={dough}
          setDough={setDough}
          size={size}
          setSize={setSize}
        />
      </div>
      <div className="material-selector">
        <MaterialSelection
          ingredientState={ingredientState}
          setIngredientState={setIngredientState}
        />
      </div>
      <div ref={inputRef} className="order-note">
        <OrderNote
          name={setName}
          setName={setName}
          note={note}
          setNote={setNote}
        />
      </div>
      <hr />
      <div className="order-detail">
        <OrderDetail
          ingredientState={ingredientState}
          count={count}
          setCount={setCount}
        />
      </div>
    </form>
    

  );
}

export default OrderOptions;
