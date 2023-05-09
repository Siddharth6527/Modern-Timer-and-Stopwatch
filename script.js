/* 

- Font sizes (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

- Spacing System (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128 */

* {
  color: #f1f3f5;
  font-size: 2.4rem;
  transition: all 0.3s;
}

.container {
  padding: 0;
  margin: 0;
  background-color: rgba(128, 128, 128, 0.329);
  border-radius: 8px;
  height: 100vh;
}

.option--inactive {
  display: none;
}
.option--active {
  opacity: 100;
}

body {
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background: radial-gradient(circle at 6.6% 12%, rgb(64, 0, 126) 40%, #00ffa0);
}

header {
  font-family: "Rubik", sans-serif !important;
  background-color: rgb(0, 0, 0);
  padding: 2.4rem;
  text-transform: uppercase;
  border-radius: 8px;
}

header h1 {
  color: #ced4da;
}

.heading--gradient {
  position: absolute;
  top: 2.8%;
  background: linear-gradient(
    90deg,
    #ff00f3,
    #0033ff,
    rgb(0, 255, 160),
    #ff0000,
    #ff00c4,
    #ffff00,
    #ff0000
  );
  background-size: 400%;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}

.bottom {
  padding-top: 3.4rem;
}

.heading-primary {
  background-color: rgb(0, 0, 0);
}

.main-nav {
  display: inline-block;
  padding-right: 5.4rem;
  transition: all 0.6s;
}

.adding-border {
  border-radius: 8px;
}

.option {
  width: 70rem;
  transition: all 1s;
}

.main-nav-list div p {
  padding: 2.4rem 2.4rem;
  font-weight: 300;
  font-size: 2.4rem;
  color: #ffe066;
  background-color: black;
  text-align: center;
  transition: all 0.5s;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.main-nav-list div p:hover {
  cursor: pointer;
  background-color: #e03131;
  box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.705);
}

main {
  display: flex;
  justify-content: center;
}

.menu {
  background-color: black;
}

.label-padding {
  padding-right: 2.4rem;
}

.units-option {
  padding: 3.2rem;
  background-color: black;
  border-radius: 10px;
  margin-top: 3.2rem;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

label {
  background-color: black;
  color: #ffe066;
}

.options {
  background-color: black;
  color: #ffe066;
}

.units-option:hover {
  transform: scale(1.1);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.inputs-result:hover {
  transform: scale(1.1);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.units-option p {
  background-color: black;
  color: #ffe066;
}

.menu div {
  background-color: black;
}

.inputs-result {
  background-color: black;
  padding: 3.2rem;
  border-radius: 10px;
  margin-top: 3.2rem;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  padding-bottom: 6.8rem;
}

.inputs-result p {
  color: #ffe066;
  background-color: black;
}

.inputs-result div {
  background-color: black;
}

input {
  background-color: black;
}

form {
  background-color: black;
}

form div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu--from {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.8rem;
}

button {
  border: none;
  background-color: #e03131;
  color: #1b1f22;
  font-weight: 600;
  padding: 0.6rem 5.4rem;
  border-radius: 5px;
  /* position: absolute; */

  transition-duration: 0.6s;
}

button:hover {
  background-color: #ff6b6b;
}

.inputs-result label {
  padding-right: 2.4rem;
}

/* STYLING SELECT */
select {
  width: 20rem;
  color: #f1f3f5;
  background-color: #343a40;
  padding: 0.1rem 0.2rem;
  font-size: 2rem;
  transition: all 0.3s;
  border-radius: 4px;
}

select:hover {
  box-shadow: red 0px 5px 30px;
}

select option {
  font-size: 2rem;
  color: #f1f3f5;
}

input {
  color: #f1f3f5;
  background-color: #343a40;
  padding: 0.1rem 0.2rem;
  font-size: 2rem;
  border-radius: 4px;
  transition: all 0.3s;
}

input:hover {
  box-shadow: red 0px 5px 30px;
  border: 2px solid grey;
}

.footer-text {
  display: flex;
  justify-content: center;
  color: black;
  font-weight: 550;
}

.units-label {
  font-size: 3rem;
}

.footer-details {
  color: #dee2e6;
  position: absolute;
  top: 160px;
  right: 22px;
  font-size: 1.6rem;
}

.copyright {
  color: #dee2e6a9;
  position: absolute;
  top: 140px;
  right: 22px;
  font-size: 1.6rem;
}

.clock-keyword--label {
  font-size: 3rem;
}

.watch--numbers {
  display: flex;
  padding: 0;
}

.watch--numbers p {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.918);

  font-size: 3rem;
}

.watch-buttons {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.bigger-font {
  font-size: 5rem !important;
}

.yellow-font {
  color: #ffe066 !important;
}

.padding-right {
  padding-right: 2.4rem;
}

.padding-fix {
  padding-right: 0.8rem;
}

.watch--buttons {
  display: flex;
  justify-content: space-between;
}

.option--stopwatch {
  width: 70rem;
}

.prevent-select {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
/* 
<!-- MADE BY: Siddharth Verma -->
<!-- Don't claim as your own --> */
