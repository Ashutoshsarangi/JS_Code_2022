for (let i = 0; i < 5; i++) {
  const btn = document.createElement("button");
  btn.innerText = `Button ${i}`;
  btn.onclick = () => {
    alert(`You click ${i}`);
  };
  document.body.append(btn);
}
