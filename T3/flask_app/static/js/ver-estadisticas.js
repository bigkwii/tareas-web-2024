// -- dom elements --
let loadProductosButton = document.getElementById('load-productos');
let loadPedidosButton = document.getElementById('load-pedidos');
let estadisticasProductos1 = document.getElementById('estadisticas-productos-1'); // frutas-verduras
let estadisticasProductos2 = document.getElementById('estadisticas-productos-2'); // every product
let estadisticasPedidos = document.getElementById('estadisticas-pedidos');
const infoModal = document.getElementById("info-modal");
const infoModalTitle = document.getElementById("info-modal-title");
const infoModalMessage = document.getElementById("info-modal-message");

// -- info modal functions --
const openInfoModal = (title, message) => {
    infoModal.style.display = "block";
    writeOnInfoModal(title, message);
};

const writeOnInfoModal = (title, message) => {
    infoModalTitle.innerText = title;
    infoModalMessage.innerText = message;
};

const closeInfoModal = () => {
    writeOnInfoModal("", "");
    infoModal.style.display = "none";
};

// flot, why do i have to do this terribleness just to change a font size?
function labelFormatterPie(label, series) {
    return "<div style='font-size:1rem; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
}

// on click, load the data through AJAX
// oh god i hate jquery syntax so much
loadProductosButton.addEventListener('click', function() {
    $.ajax({
        url: '/get-stats-productos',
        type: 'GET',
        success: function(response) {
            // pie chart for frutas vs verduras...
            let data1 = [
                {label: "Frutas", data: response["frutas_vs_verduras"]["frutas"], color: "red"},
                {label: "Verduras", data: response["frutas_vs_verduras"]["verduras"], color: "green"}
            ];
            let options1 = {
                series: {
                    pie: {
                        show: true,
                        radius: 9/10,
                        label: {
                            show: true,
                            radius: 1,
                            formatter: labelFormatterPie,
                            background: {
                                opacity: 0.8
                            }
                        }
                    }
                },
                grid: {
                    hoverable: true,
                    clickable: true
                }
            };
            $.plot('#estadisticas-productos-1', data1, options1);

            // ... pie chart for the top 10 products
            let data2 = [];
            for (let producto in response["every_verdura_fruta"]) {
                data2.push( { label: producto, data: response["every_verdura_fruta"][producto] } );
            }
            let options2 = {
                series: {
                    pie: {
                        show: true,
                        radius: 1,
                        label: {
                            show: true,
                            radius: 1,
                            formatter: labelFormatterPie,
                            background: {
                                opacity: 0.8
                            },
                            threshold: 0.05
                        }
                    }
                },
                grid: {
                    hoverable: true,
                    clickable: true
                }
            };
            $.plot('#estadisticas-productos-2', data2, options2);

            // for more information, clicking on a slice triggers an alert with the name of the product and the percentage
            $('#estadisticas-productos-1').bind('plotclick', function(event, pos, obj) {
                if (!obj) {
                    return;
                }
                openInfoModal("Detalle Tipo de Producto",
                                 "Tipo: " + obj.series.label + "\nProductos registrados de este tipo: " + obj.series.data[0][1] + "\nPorcentaje: " + Math.round(obj.series.percent) + "%" );
            });
            $('#estadisticas-productos-2').bind('plotclick', function(event, pos, obj) {
                if (!obj) {
                    return;
                }
                openInfoModal("Detalle Vegetal",
                                 "Nombre: " + obj.series.label + "\nListados totales de este vegetal: " + obj.series.data[0][1] + "\nPorcentaje: " + Math.round(obj.series.percent) + "%" );
            });
        },
        error: function(error) {
            console.log(error);
        }
    });
});

loadPedidosButton.addEventListener('click', function() {
    $.ajax({
        url: '/get-stats-pedidos',
        type: 'GET',
        success: function(response) {
            // pie charts for pedidos
            let by_comuna = response["counts_by_comunas"]; // has the form {"comuna_name": [count, region_id]}
            // make 1 pie chart per region, with the comuna names as labels, and add buttons to switch between regions
            let regionLabels = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "RM", "XIV", "XV", "XVI"];
            let data = [];
            let options = {
                series: {
                    pie: {
                        show: true,
                        radius: 9/10,
                        label: {
                            show: true,
                            radius: 1,
                            formatter: labelFormatterPie,
                            background: {
                                opacity: 0.8
                            },
                            threshold: 0.05
                        }
                    }
                },
                grid: {
                    hoverable: true,
                    clickable: true
                }
            };
            let regionButtons = document.getElementById('region-buttons');
            let regionTitle = document.getElementById('region-title');
            // remove previous buttons
            while (regionButtons.firstChild) {
                regionButtons.removeChild(regionButtons.firstChild);
            }
            for (let region_idx = 0; region_idx < regionLabels.length; region_idx++) {
                let regionButton = document.createElement('button');
                regionButton.innerText = regionLabels[region_idx];
                regionButton.addEventListener('click', function() {
                    let data = [];
                    for (let comuna in by_comuna) {
                        if (by_comuna[comuna][1] === region_idx + 1) {
                            data.push( { label: comuna, data: by_comuna[comuna][0] } );
                        }
                    }
                    // if all comuna counts are 0, show a message saying there's no data
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].data !== 0) {
                            break;
                        }
                        if (i === data.length - 1) {
                            data = [ { label: "No hay datos para esta región", data: 1, color: "black" } ];
                        }
                    }
                    regionTitle.innerText = regionLabels[region_idx];
                    $.plot('#estadisticas-pedidos', data, options);
                });
                regionButton.classList.add('btn');
                // center the buttons
                regionButtons.style.textAlign = "center";
                regionButtons.appendChild(regionButton);
            }
            // initial plot (should've made a function, oh well)
            for (let comuna in by_comuna) {
                if (by_comuna[comuna][1] === 1) {
                    data.push( { label: comuna, data: by_comuna[comuna][0] } );
                }
            }
            for (let i = 0; i < data.length; i++) {
                if (data[i].data !== 0) {
                    break;
                }
                if (i === data.length - 1) {
                    data = [ { label: "No hay datos para esta región", data: 1, color: "black" } ];
                }
            }
            regionTitle.innerText = "I";
            $.plot('#estadisticas-pedidos', data, options);
            // for more information, clicking on a slice triggers an alert with the name of the comuna and the percentage
            $('#estadisticas-pedidos').bind('plotclick', function(event, pos, obj) {
                if (!obj) {
                    return;
                }
                openInfoModal("Detalle Comuna",
                                 "Nombre: " + obj.series.label + "\nPedidos registrados en esta comuna: " + obj.series.data[0][1] + "\nPorcentaje: " + Math.round(obj.series.percent) + "%" );
            });

        },
        error: function(error) {
            console.log(error);
        }
    });
});