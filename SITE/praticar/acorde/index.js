
const cover = document.querySelector(".card-image");
const title = document.querySelector(".card-content h5");
const audio = document.querySelector("audio");

const data = {
    title: "Contra-Baixo",
    cover: "files/como-comecei.jpg",
    file: "files/como-comecei.mp3"
};

cover.style.background = `url('${data.cover}') no-repeat center center / cover`
title.innerHTML = data.title;
audio.src = data.file;
