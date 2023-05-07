import React, { useState, useEffect } from "react";
import Button from "/src/button/button";
import { Label } from "./styled";
import Input from '../elements/input';
import getMask from '../utils/mask';
import { toast } from "react-toastify";

function Order({ isShow }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const onChange = (evt, setChange) => setChange(evt.target.value);
  const isButtonEnable = (name.length > 2) && (phone.length === 17) && address;
  const notify = () => toast.success(
    `${name}, спасибо за заказ. Мы доставим его как можно скорее по адресу: ${address}`,
    {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000,
      className: "toast-message"
    }
  );

  useEffect(() => {
    if (isShow) {
      getMask();
    }

  }, [phone, setPhone, isButtonEnable]);

  return (
    <form >
      <Label>
        Имя:{" "}
        <Input
          placeholder="Введите имя"
          required
          name="name"
          value={name}
          onChange={(evt) => onChange(evt, setName)}
        />
      </Label>
      <Label>
        Телефон:{" "}
        <Input
          placeholder="Введите тел"
          name="phone"
          type="tel"
          required
          onBlur={(evt) => setPhone(evt.target.value)}
        />
      </Label>
      <Label>
        Адрес доставки:{" "}
        <Input
          as="textarea"
          required
          placeholder="Введите адрес"
          name="address"
          value={address}
          onChange={(evt) => onChange(evt, setAddress)}
        />
      </Label>
      <Button
        type="submit"
        disabled={!isButtonEnable}
        onClick={(evt) => {
          evt.preventDefault();
          notify();
        }}
      >
        Оформить
      </Button>
    </form>
  );
}

export default Order;
