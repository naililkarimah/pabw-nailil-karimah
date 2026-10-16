
import { render, tandaiTombolAktif } from "./dom.js";
import { state } from "./state.js";
import { pasangEventFilter, pasangEventForm, pasangEventAturUlang } from "./events.js";

render(state);

tandaiTombolAktif(
  document.querySelector(
    `#filter button[data-kategori="${state.kategoriAktif}"]`
  )
);

pasangEventFilter();
pasangEventForm();
pasangEventAturUlang();
