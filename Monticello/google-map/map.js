// Initialize and add the map
let map;
const marker = document.createElement("span");
marker.classList.add("custom-marker");
marker.innerHTML = `<div class="wrapper-marker">
                      <div class="inner-marker">
                        <div class="core-marker"></div>
                      </div>
                    </div>`;
async function initMap() {
  // The location of Brooklyn
  const position = { lat: 40.650002, lng: - 73.94990 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Brooklyn
  map = new Map(document.getElementById("map"), {
    zoom: 12,
    center: position,
    mapId: "82dbd8f643bd08b1",
  });

  // The marker, positioned at Brooklyn
  new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Monticello",
    content: marker,
  });
}

initMap();

