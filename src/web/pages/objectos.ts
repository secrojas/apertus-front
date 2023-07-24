import reclutamiento from '../../assets/imgs/theme/reclutamiento.png'
import modulo from '../../assets/imgs/theme/modulo.png'
import calidad from '../../assets/imgs/theme/calidad.png'
import capacitacion from '../../assets/imgs/theme/capacitacion.png'
import reingenieria from '../../assets/imgs/theme/reingenieria.png'
import generadoresValor from '../../assets/imgs/theme/generadores-valor.png'

import evalPsico from '../../assets/imgs/theme/evaluaciones-psico.png'
import encuestasClima from '../../assets/imgs/theme/encuestas-clima.png'
import entrevistasCompet from '../../assets/imgs/theme/entrevistas-comp.png'

import academia from '../../assets/imgs/academia/academia-portada.png'
import analyst from '../../assets/imgs/academia/analista-rrhh.png'
import recruiter from '../../assets/imgs/academia/reclutamiento-it.png'
import marketing from '../../assets/imgs/academia/marketing-emprendedores.png'
import payments from '../../assets/imgs/academia/liquidacion-sueldos.png'
 
 export const services = { 
    relutamiento:{
        name:'Reclutamiento y Selección',
        img:reclutamiento,
        to:'/reclutamientoYSeleccion'
    }, 
    modulo:{
        name:'Módulo de RRHH',
        img:modulo,
        to:'/moduloDeRRHH'
    },
    reingenieria:{
        name:'Reingeniería y Mejora de Procesos',
        img:reingenieria,
        to:'/mejoraDeProcesos'
    },
    calidad:{
        name:'Calidad y Mejora Continua',
        img:calidad,
        to:'/calidadYMejora'
    },
    programas:{
        name:'Programas de Capacitación',
        img:capacitacion,
        to:'/programasDeCapacitacion'
    },
    valor:{
        name:'Generadores de Valor',
        img:generadoresValor,
        to:'/generadoresDeValor'
    },
    academia:{
        name:'ACADEMIA APERTUS',
        img:academia,
        to:'/academia'
    },

 }


 export const generadoresDeValor = { 
    
    evaluacionesPsicotecnicas:{
        name:'Evaluaciones psicotécnicas',
        img:evalPsico,
        to:'/generadoresDeValor/evaluacionesPsicotecnicas'
    }, 
    encuestasDeClima:{
        name:'Encuestas de clima',
        img:encuestasClima,
        to:'/generadoresDeValor/encuestasDeClima'
    },
    entrevistasPorCompetencias:{
        name:'Entrevistas por competencias',
        img:entrevistasCompet,
        to:'/generadoresDeValor/entrevistasPorCompetencias'
    },

 }

 export const coursesAcademy = { 
    
    rrhhAnalyst:{
        name:'Analista de RRHH',
        img:analyst,
        to:'/academia/analistaRRHH'
    }, 
    itRecruitment:{
        name:'Reclutamiento IT',
        img:recruiter,
        to:'/academia/reclutamientoIT'
    },
    marketing:{
        name:'Marketing para emprendedores',
        img:marketing,
        to:'/academia/marketingEmprendedores'
    },
    payments:{
        name:'Liquidación de sueldos',
        img:payments,
        to:'/academia/liquidacionSueldos'
    },
 }