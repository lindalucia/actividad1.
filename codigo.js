const { createApp } = Vue;

createApp({
    data() {
        return {
            nhoras: 0,
            vhora: 0,
            salud: 0,
            pension: 0,
            icbf: 0,
            primas_perc: 0,
            prestamo_perc: 0,
            bonificacion_perc: 0
        };
    },
    computed: {
        salarioBasico() {
            return this.nhoras * this.vhora;
        },
        dedu_salud() {
            return (this.salarioBasico * this.salud) / 100;
        },
        dedu_pension() {
            return (this.salarioBasico * this.pension) / 100;
        },
        dedu_icbf() {
            return (this.salarioBasico * this.icbf) / 100;
        },
        totalDeducciones() {
            return this.dedu_salud + this.dedu_pension + this.dedu_icbf;
        },
        valor_primas() {
            return (this.salarioBasico * this.primas_perc) / 100;
        },
        valor_prestamo() {
            return (this.salarioBasico * this.prestamo_perc) / 100;
        },
        valor_bonificacion() {
            return (this.salarioBasico * this.bonificacion_perc) / 100;
        },
        totalAportes() {
            return this.valor_primas + this.valor_prestamo + this.valor_bonificacion;
        },
        totalAPagar() {
            return this.salarioBasico - this.totalDeducciones + this.totalAportes;
        }
    }
}).mount('#app1');