const lazyInit = (element, fn) => {
  const observer = new IntersectionObserver((entries) => {
    if (entries.some(({isIntersecting}) => isIntersecting)) {
      observer.disconnect();
      fn();
    }
  });
  observer.observe(element);
};

const mapElement = document.querySelector('#map');
const initMap = () => {
  lazyInit(mapElement, () => {
    const map = L.map(mapElement, {
      scrollWheelZoom: false,
    }).setView([55.02858, 82.92804], 16);

    const layer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    map.addLayer(layer);

    const markerIcon = L.icon({
      iconUrl: 'img/svg/pin.svg',
      iconSize: [70, 70],
    });
    const marker = new L.Marker([55.02858, 82.92804], {icon: markerIcon});
    marker.addTo(map);
  });
};

export {initMap};
