import React from 'react';
import '../css/styles.css';
import Paper from './Paper';
import Pdf from './pdfs/sample.pdf';
import PdfPrev from '../assets/img/pdf_preview/pdfsample.png';
import PdfPrev2 from '../assets/img/pdf_preview/pdfsample2.png';
import StockTradingSystem from './pdfs/1712.09592.pdf';
import StockTradingSystemPrev1 from '../assets/img/pdf_preview/StockTradingSystem/prev1.png';
import StockTradingSystemPrev2 from '../assets/img/pdf_preview/StockTradingSystem/prev2.png';
import StockTradingSystemPrev3 from '../assets/img/pdf_preview/StockTradingSystem/prev3.png';
import StockTradingSystemPrev4 from '../assets/img/pdf_preview/StockTradingSystem/prev4.png';
import AlgorithmicFinancialTrading from './pdfs/1560578401_E11311-e-tarjome.pdf';
import AlgorithmicFinancialTradingPrev1 from '../assets/img/pdf_preview/AlgorithmicFinancialTrading/prev1.png';
import AlgorithmicFinancialTradingPrev2 from '../assets/img/pdf_preview/AlgorithmicFinancialTrading/prev2.png';
import AlgorithmicFinancialTradingPrev3 from '../assets/img/pdf_preview/AlgorithmicFinancialTrading/prev3.png';
import AlgorithmicFinancialTradingPrev4 from '../assets/img/pdf_preview/AlgorithmicFinancialTrading/prev4.png';
import ConvolutionalAutoencoder from './pdfs/Seyfioglu_CAE_TAES2018.pdf';
import ConvolutionalAutoencoderPrev1 from '../assets/img/pdf_preview/ConvolutionalAutoencoder/prev1.png';
import ConvolutionalAutoencoderPrev2 from '../assets/img/pdf_preview/ConvolutionalAutoencoder/prev2.png';
import ConvolutionalAutoencoderPrev3 from '../assets/img/pdf_preview/ConvolutionalAutoencoder/prev3.png';
import ConvolutionalAutoencoderPrev4 from '../assets/img/pdf_preview/ConvolutionalAutoencoder/prev4.png';
import MicroDoppler from './pdfs/micro-doppler.pdf';
import MicroDopplerPrev1 from '../assets/img/pdf_preview/MicroDoppler/prev1.png';
import MicroDopplerPrev2 from '../assets/img/pdf_preview/MicroDoppler/prev2.png';
import MicroDopplerPrev3 from '../assets/img/pdf_preview/MicroDoppler/prev3.png';
import MicroDopplerPrev4 from '../assets/img/pdf_preview/MicroDoppler/prev4.png';
import BurnedAreainForestFires from './pdfs/BurnedAreainForestFires.pdf';
import BurnedAreainForestFiresPrev1 from '../assets/img/pdf_preview/BurnedAreainForestFires/prev1.png';
import BurnedAreainForestFiresPrev2 from '../assets/img/pdf_preview/BurnedAreainForestFires/prev2.png';
import BurnedAreainForestFiresPrev3 from '../assets/img/pdf_preview/BurnedAreainForestFires/prev3.png';
import BurnedAreainForestFiresPrev4 from '../assets/img/pdf_preview/BurnedAreainForestFires/prev4.png';
import StockTradingSystem2 from './pdfs/StockTradingSystem2.pdf';
import StockTradingSystem2Prev1 from '../assets/img/pdf_preview/StockTradingSystem2/prev1.png';
import StockTradingSystem2Prev2 from '../assets/img/pdf_preview/StockTradingSystem2/prev2.png';
import StockTradingSystem2Prev3 from '../assets/img/pdf_preview/StockTradingSystem2/prev3.png';
import StockTradingSystem2Prev4 from '../assets/img/pdf_preview/StockTradingSystem2/prev4.png';
import ImageConversionApproach from './pdfs/ImageConversionApproach.pdf';
import ImageConversionApproachPrev1 from '../assets/img/pdf_preview/ImageConversionApproach/prev1.png';
import ImageConversionApproachPrev2 from '../assets/img/pdf_preview/ImageConversionApproach/prev2.png';
import ImageConversionApproachPrev3 from '../assets/img/pdf_preview/ImageConversionApproach/prev3.png';
import ImageConversionApproachPrev4 from '../assets/img/pdf_preview/ImageConversionApproach/prev4.png';
import HighwayAccidentDetectionModel from './pdfs/HighwayAccidentDetectionModel.pdf';
import HighwayAccidentDetectionModelPrev1 from '../assets/img/pdf_preview/HighwayAccidentDetectionModel/prev1.png';
import HighwayAccidentDetectionModelPrev2 from '../assets/img/pdf_preview/HighwayAccidentDetectionModel/prev2.png';
import HighwayAccidentDetectionModelPrev3 from '../assets/img/pdf_preview/HighwayAccidentDetectionModel/prev3.png';
import HighwayAccidentDetectionModelPrev4 from '../assets/img/pdf_preview/HighwayAccidentDetectionModel/prev4.png';
import ExtendedIoTFramework from './pdfs/ExtendedIoTFramework.pdf';
import ExtendedIoTFrameworkPrev1 from '../assets/img/pdf_preview/ExtendedIoTFramework/prev1.png';
import ExtendedIoTFrameworkPrev2 from '../assets/img/pdf_preview/ExtendedIoTFramework/prev2.png';
import ExtendedIoTFrameworkPrev3 from '../assets/img/pdf_preview/ExtendedIoTFramework/prev3.png';
import ExtendedIoTFrameworkPrev4 from '../assets/img/pdf_preview/ExtendedIoTFramework/prev4.png';
import ClusteringQualityImp from './pdfs/ClusteringQualityImp.pdf';
import ClusteringQualityImpPrev1 from '../assets/img/pdf_preview/ClusteringQualityImp/prev1.png';
import ClusteringQualityImpPrev2 from '../assets/img/pdf_preview/ClusteringQualityImp/prev2.png';
import ClusteringQualityImpPrev3 from '../assets/img/pdf_preview/ClusteringQualityImp/prev3.png';
import ClusteringQualityImpPrev4 from '../assets/img/pdf_preview/ClusteringQualityImp/prev4.png';
import CNNTrend from './pdfs/CNNTrend.pdf';
import CNNTrendPrev1 from '../assets/img/pdf_preview/CNNTrend/prev1.png';
import CNNTrendPrev2 from '../assets/img/pdf_preview/CNNTrend/prev2.png';
import CNNTrendPrev3 from '../assets/img/pdf_preview/CNNTrend/prev3.png';
import CNNTrendPrev4 from '../assets/img/pdf_preview/CNNTrend/prev4.png';
import SensorFault from './pdfs/SensorFault.pdf';
import SensorFaultPrev1 from '../assets/img/pdf_preview/SensorFault/prev1.png';
import SensorFaultPrev2 from '../assets/img/pdf_preview/SensorFault/prev2.png';
import SensorFaultPrev3 from '../assets/img/pdf_preview/SensorFault/prev3.png';
import SensorFaultPrev4 from '../assets/img/pdf_preview/SensorFault/prev4.png';
import AutomatedVehicleClass from './pdfs/AutomatedVehicleClass.pdf';
import AutomatedVehicleClassPrev1 from '../assets/img/pdf_preview/AutomatedVehicleClass/prev1.png';
import AutomatedVehicleClassPrev2 from '../assets/img/pdf_preview/AutomatedVehicleClass/prev2.png';
import AutomatedVehicleClassPrev3 from '../assets/img/pdf_preview/AutomatedVehicleClass/prev3.png';
import AutomatedVehicleClassPrev4 from '../assets/img/pdf_preview/AutomatedVehicleClass/prev4.png';
import SurveySemantic from './pdfs/SurveySemantic.pdf';
import SurveySemanticPrev1 from '../assets/img/pdf_preview/SurveySemantic/prev1.png';
import SurveySemanticPrev2 from '../assets/img/pdf_preview/SurveySemantic/prev2.png';
import SurveySemanticPrev3 from '../assets/img/pdf_preview/SurveySemantic/prev3.png';
import SurveySemanticPrev4 from '../assets/img/pdf_preview/SurveySemantic/prev4.png';
import OntologyBased1 from './pdfs/OntologyBased1.pdf';
import OntologyBased1Prev1 from '../assets/img/pdf_preview/OntologyBased1/prev1.png';
import OntologyBased1Prev2 from '../assets/img/pdf_preview/OntologyBased1/prev2.png';
import OntologyBased1Prev3 from '../assets/img/pdf_preview/OntologyBased1/prev3.png';
import OntologyBased1Prev4 from '../assets/img/pdf_preview/OntologyBased1/prev4.png';
import RSIIndicator from './pdfs/RSIIndicator.pdf';
import RSIIndicatorPrev1 from '../assets/img/pdf_preview/RSIIndicator/prev1.png';
import RSIIndicatorPrev2 from '../assets/img/pdf_preview/RSIIndicator/prev2.png';
import RSIIndicatorPrev3 from '../assets/img/pdf_preview/RSIIndicator/prev3.png';
import RSIIndicatorPrev4 from '../assets/img/pdf_preview/RSIIndicator/prev4.png';
import SurveyOfPartner from './pdfs/SurveyOfPartner.pdf';
import SurveyOfPartnerPrev1 from '../assets/img/pdf_preview/SurveyOfPartner/prev1.png';
import SurveyOfPartnerPrev2 from '../assets/img/pdf_preview/SurveyOfPartner/prev2.png';
import SurveyOfPartnerPrev3 from '../assets/img/pdf_preview/SurveyOfPartner/prev3.png';
import SurveyOfPartnerPrev4 from '../assets/img/pdf_preview/SurveyOfPartner/prev4.png';
import HighQualityClust from './pdfs/HighQualityClust.pdf';
import HighQualityClustPrev1 from '../assets/img/pdf_preview/HighQualityClust/prev1.png';
import HighQualityClustPrev2 from '../assets/img/pdf_preview/HighQualityClust/prev2.png';
import HighQualityClustPrev3 from '../assets/img/pdf_preview/HighQualityClust/prev3.png';
import HighQualityClustPrev4 from '../assets/img/pdf_preview/HighQualityClust/prev4.png';
import MultiAgentSystem from './pdfs/MultiAgentSystem.pdf';
import MultiAgentSystemPrev1 from '../assets/img/pdf_preview/MultiAgentSystem/prev1.png';
import MultiAgentSystemPrev2 from '../assets/img/pdf_preview/MultiAgentSystem/prev2.png';
import MultiAgentSystemPrev3 from '../assets/img/pdf_preview/MultiAgentSystem/prev3.png';
import MultiAgentSystemPrev4 from '../assets/img/pdf_preview/MultiAgentSystem/prev4.png';
import GasLiquidFlow from './pdfs/GasLiquidFlow.pdf';
import GasLiquidFlowPrev1 from '../assets/img/pdf_preview/GasLiquidFlow/prev1.png';
import GasLiquidFlowPrev2 from '../assets/img/pdf_preview/GasLiquidFlow/prev2.png';
import GasLiquidFlowPrev3 from '../assets/img/pdf_preview/GasLiquidFlow/prev3.png';
import GasLiquidFlowPrev4 from '../assets/img/pdf_preview/GasLiquidFlow/prev4.png';
import AutomatedGen from './pdfs/AutomatedGen.pdf';
import AutomatedGenPrev1 from '../assets/img/pdf_preview/AutomatedGen/prev1.png';
import AutomatedGenPrev2 from '../assets/img/pdf_preview/AutomatedGen/prev2.png';
import AutomatedGenPrev3 from '../assets/img/pdf_preview/AutomatedGen/prev3.png';
import AutomatedGenPrev4 from '../assets/img/pdf_preview/AutomatedGen/prev4.png';
import SmartGridApp from './pdfs/SmartGridApp.pdf';
import SmartGridAppPrev1 from '../assets/img/pdf_preview/SmartGridApp/prev1.png';
import SmartGridAppPrev2 from '../assets/img/pdf_preview/SmartGridApp/prev2.png';
import SmartGridAppPrev3 from '../assets/img/pdf_preview/SmartGridApp/prev3.png';
import SmartGridAppPrev4 from '../assets/img/pdf_preview/SmartGridApp/prev4.png';
import OntologyBased2 from './pdfs/OntologyBased2.pdf';
import OntologyBased2Prev1 from '../assets/img/pdf_preview/OntologyBased2/prev1.png';
import OntologyBased2Prev2 from '../assets/img/pdf_preview/OntologyBased2/prev2.png';
import OntologyBased2Prev3 from '../assets/img/pdf_preview/OntologyBased2/prev3.png';
import OntologyBased2Prev4 from '../assets/img/pdf_preview/OntologyBased2/prev4.png';
import OptionPairOpt from './pdfs/OptionPairOpt.pdf';
import OptionPairOptPrev1 from '../assets/img/pdf_preview/OptionPairOpt/prev1.png';
import OptionPairOptPrev2 from '../assets/img/pdf_preview/OptionPairOpt/prev2.png';
import OptionPairOptPrev3 from '../assets/img/pdf_preview/OptionPairOpt/prev3.png';
import OptionPairOptPrev4 from '../assets/img/pdf_preview/OptionPairOpt/prev4.png';
import CoveredCall from './pdfs/CoveredCall.pdf';
import CoveredCallPrev1 from '../assets/img/pdf_preview/CoveredCall/prev1.png';
import CoveredCallPrev2 from '../assets/img/pdf_preview/CoveredCall/prev2.png';
import CoveredCallPrev3 from '../assets/img/pdf_preview/CoveredCall/prev3.png';
import CoveredCallPrev4 from '../assets/img/pdf_preview/CoveredCall/prev4.png';
import InsParamPrediction from './pdfs/InsParamPrediction.pdf';
import InsParamPredictionPrev1 from '../assets/img/pdf_preview/InsParamPrediction/prev1.png';
import InsParamPredictionPrev2 from '../assets/img/pdf_preview/InsParamPrediction/prev2.png';
import InsParamPredictionPrev3 from '../assets/img/pdf_preview/InsParamPrediction/prev3.png';
import InsParamPredictionPrev4 from '../assets/img/pdf_preview/InsParamPrediction/prev4.png';
import CoalGasification from './pdfs/CoalGasification.pdf';
import CoalGasificationPrev1 from '../assets/img/pdf_preview/CoalGasification/prev1.png';
import CoalGasificationPrev2 from '../assets/img/pdf_preview/CoalGasification/prev2.png';
import CoalGasificationPrev3 from '../assets/img/pdf_preview/CoalGasification/prev3.png';
import CoalGasificationPrev4 from '../assets/img/pdf_preview/CoalGasification/prev4.png';
import AnomalyDetect from './pdfs/AnomalyDetect.pdf';
import AnomalyDetectPrev1 from '../assets/img/pdf_preview/AnomalyDetect/prev1.png';
import AnomalyDetectPrev2 from '../assets/img/pdf_preview/AnomalyDetect/prev2.png';
import AnomalyDetectPrev3 from '../assets/img/pdf_preview/AnomalyDetect/prev3.png';
import AnomalyDetectPrev4 from '../assets/img/pdf_preview/AnomalyDetect/prev4.png';
import CustomersType from './pdfs/CustomersType.pdf';
import CustomersTypePrev1 from '../assets/img/pdf_preview/CustomersType/prev1.png';
import CustomersTypePrev2 from '../assets/img/pdf_preview/CustomersType/prev2.png';
import CustomersTypePrev3 from '../assets/img/pdf_preview/CustomersType/prev3.png';
import CustomersTypePrev4 from '../assets/img/pdf_preview/CustomersType/prev4.png';
import CentroidCalc from './pdfs/CentroidCalc.pdf';
import CentroidCalcPrev1 from '../assets/img/pdf_preview/CentroidCalc/prev1.png';
import CentroidCalcPrev2 from '../assets/img/pdf_preview/CentroidCalc/prev2.png';
import CentroidCalcPrev3 from '../assets/img/pdf_preview/CentroidCalc/prev3.png';
import CentroidCalcPrev4 from '../assets/img/pdf_preview/CentroidCalc/prev4.png';
import ModularIntelligentServer from './pdfs/ModularIntelligentServer.pdf';
import ModularIntelligentServerPrev1 from '../assets/img/pdf_preview/ModularIntelligentServer/prev1.png';
import ModularIntelligentServerPrev2 from '../assets/img/pdf_preview/ModularIntelligentServer/prev2.png';
import ModularIntelligentServerPrev3 from '../assets/img/pdf_preview/ModularIntelligentServer/prev3.png';
import ModularIntelligentServerPrev4 from '../assets/img/pdf_preview/ModularIntelligentServer/prev4.png';
import LoadAndPv from './pdfs/LoadAndPv.pdf';
import LoadAndPvPrev1 from '../assets/img/pdf_preview/LoadAndPv/prev1.png';
import LoadAndPvPrev2 from '../assets/img/pdf_preview/LoadAndPv/prev2.png';
import LoadAndPvPrev3 from '../assets/img/pdf_preview/LoadAndPv/prev3.png';
import LoadAndPvPrev4 from '../assets/img/pdf_preview/LoadAndPv/prev4.png';
import EstimationOfParameters from './pdfs/EstimationOfParameters.pdf';
import EstimationOfParametersPrev1 from '../assets/img/pdf_preview/EstimationOfParameters/prev1.png';
import EstimationOfParametersPrev2 from '../assets/img/pdf_preview/EstimationOfParameters/prev2.png';
import EstimationOfParametersPrev3 from '../assets/img/pdf_preview/EstimationOfParameters/prev3.png';
import EstimationOfParametersPrev4 from '../assets/img/pdf_preview/EstimationOfParameters/prev4.png';
import NoteAndTimbre from './pdfs/NoteAndTimbre.pdf';
import NoteAndTimbrePrev1 from '../assets/img/pdf_preview/NoteAndTimbre/prev1.png';
import NoteAndTimbrePrev2 from '../assets/img/pdf_preview/NoteAndTimbre/prev2.png';
import NoteAndTimbrePrev3 from '../assets/img/pdf_preview/NoteAndTimbre/prev3.png';
import NoteAndTimbrePrev4 from '../assets/img/pdf_preview/NoteAndTimbre/prev4.png';
import WaterGasShiftReactor from './pdfs/WaterGasShiftReactor.pdf';
import WaterGasShiftReactorPrev1 from '../assets/img/pdf_preview/WaterGasShiftReactor/prev1.png';
import WaterGasShiftReactorPrev2 from '../assets/img/pdf_preview/WaterGasShiftReactor/prev2.png';
import WaterGasShiftReactorPrev3 from '../assets/img/pdf_preview/WaterGasShiftReactor/prev3.png';
import WaterGasShiftReactorPrev4 from '../assets/img/pdf_preview/WaterGasShiftReactor/prev4.png';
import WhyTheNames from './pdfs/WhyTheNames.pdf';
import WhyTheNamesPrev1 from '../assets/img/pdf_preview/WhyTheNames/prev1.png';
import WhyTheNamesPrev2 from '../assets/img/pdf_preview/WhyTheNames/prev2.png';
import WhyTheNamesPrev3 from '../assets/img/pdf_preview/WhyTheNames/prev3.png';
import WhyTheNamesPrev4 from '../assets/img/pdf_preview/WhyTheNames/prev4.png';
import ThreePhaseFlow from './pdfs/ThreePhaseFlow.pdf';
import ThreePhaseFlowPrev1 from '../assets/img/pdf_preview/ThreePhaseFlow/prev1.png';
import ThreePhaseFlowPrev2 from '../assets/img/pdf_preview/ThreePhaseFlow/prev2.png';
import ThreePhaseFlowPrev3 from '../assets/img/pdf_preview/ThreePhaseFlow/prev3.png';
import ThreePhaseFlowPrev4 from '../assets/img/pdf_preview/ThreePhaseFlow/prev4.png';
import EffectofParameters from './pdfs/EffectofParameters.pdf';
import EffectofParametersPrev1 from '../assets/img/pdf_preview/EffectofParameters/prev1.png';
import EffectofParametersPrev2 from '../assets/img/pdf_preview/EffectofParameters/prev2.png';
import EffectofParametersPrev3 from '../assets/img/pdf_preview/EffectofParameters/prev3.png';
import EffectofParametersPrev4 from '../assets/img/pdf_preview/EffectofParameters/prev4.png';
import PressureLossEstimation from './pdfs/PressureLossEstimation.pdf';
import PressureLossEstimationPrev1 from '../assets/img/pdf_preview/PressureLossEstimation/prev1.png';
import PressureLossEstimationPrev2 from '../assets/img/pdf_preview/PressureLossEstimation/prev2.png';
import PressureLossEstimationPrev3 from '../assets/img/pdf_preview/PressureLossEstimation/prev3.png';
import PressureLossEstimationPrev4 from '../assets/img/pdf_preview/PressureLossEstimation/prev4.png';
import FinancialForecasting from './pdfs/FinancialForecasting.pdf';
import FinancialForecastingPrev1 from '../assets/img/pdf_preview/FinancialForecasting/prev1.png';
import FinancialForecastingPrev2 from '../assets/img/pdf_preview/FinancialForecasting/prev2.png';
import FinancialForecastingPrev3 from '../assets/img/pdf_preview/FinancialForecasting/prev3.png';
import FinancialForecastingPrev4 from '../assets/img/pdf_preview/FinancialForecasting/prev4.png';
import SatelliteImageDecomp from './pdfs/SatelliteImageDecomp.pdf';
import SatelliteImageDecompPrev1 from '../assets/img/pdf_preview/SatelliteImageDecomp/prev1.png';
import SatelliteImageDecompPrev2 from '../assets/img/pdf_preview/SatelliteImageDecomp/prev2.png';
import SatelliteImageDecompPrev3 from '../assets/img/pdf_preview/SatelliteImageDecomp/prev3.png';
import SatelliteImageDecompPrev4 from '../assets/img/pdf_preview/SatelliteImageDecomp/prev4.png';
import CWRadar from './pdfs/CWRadar.pdf';
import CWRadarPrev1 from '../assets/img/pdf_preview/CWRadar/prev1.png';
import CWRadarPrev2 from '../assets/img/pdf_preview/CWRadar/prev2.png';
import CWRadarPrev3 from '../assets/img/pdf_preview/CWRadar/prev3.png';
import CWRadarPrev4 from '../assets/img/pdf_preview/CWRadar/prev4.png';
import OpinionMining from './pdfs/OpinionMining.pdf';
import OpinionMiningPrev1 from '../assets/img/pdf_preview/OpinionMining/prev1.png';
import OpinionMiningPrev2 from '../assets/img/pdf_preview/OpinionMining/prev2.png';
import OpinionMiningPrev3 from '../assets/img/pdf_preview/OpinionMining/prev3.png';
import OpinionMiningPrev4 from '../assets/img/pdf_preview/OpinionMining/prev4.png';
import GenericMenuOpt from './pdfs/GenericMenuOpt.pdf';
import GenericMenuOptPrev1 from '../assets/img/pdf_preview/GenericMenuOpt/prev1.png';
import GenericMenuOptPrev2 from '../assets/img/pdf_preview/GenericMenuOpt/prev2.png';
import GenericMenuOptPrev3 from '../assets/img/pdf_preview/GenericMenuOpt/prev3.png';
import GenericMenuOptPrev4 from '../assets/img/pdf_preview/GenericMenuOpt/prev4.png';
import AutomatedImage from './pdfs/AutomatedImage.pdf';
import AutomatedImagePrev1 from '../assets/img/pdf_preview/AutomatedImage/prev1.png';
import AutomatedImagePrev2 from '../assets/img/pdf_preview/AutomatedImage/prev2.png';
import AutomatedImagePrev3 from '../assets/img/pdf_preview/AutomatedImage/prev3.png';
import AutomatedImagePrev4 from '../assets/img/pdf_preview/AutomatedImage/prev4.png';
import SatelliteImageBand from './pdfs/SatelliteImageBand.pdf';
import SatelliteImageBandPrev1 from '../assets/img/pdf_preview/SatelliteImageBand/prev1.png';
import SatelliteImageBandPrev2 from '../assets/img/pdf_preview/SatelliteImageBand/prev2.png';
import SatelliteImageBandPrev3 from '../assets/img/pdf_preview/SatelliteImageBand/prev3.png';
import SatelliteImageBandPrev4 from '../assets/img/pdf_preview/SatelliteImageBand/prev4.png';
import VirtualEnterprisesUsingFuzzyLogic from './pdfs/VirtualEnterprisesUsingFuzzyLogic.pdf';
import VirtualEnterprisesUsingFuzzyLogicPrev1 from '../assets/img/pdf_preview/VirtualEnterprisesUsingFuzzyLogic/prev1.png';
import VirtualEnterprisesUsingFuzzyLogicPrev2 from '../assets/img/pdf_preview/VirtualEnterprisesUsingFuzzyLogic/prev2.png';
import VirtualEnterprisesUsingFuzzyLogicPrev3 from '../assets/img/pdf_preview/VirtualEnterprisesUsingFuzzyLogic/prev3.png';
import VirtualEnterprisesUsingFuzzyLogicPrev4 from '../assets/img/pdf_preview/VirtualEnterprisesUsingFuzzyLogic/prev4.png';


const Publications = () => {
    return (
        <section className="page-section bg-dark mt-4 pb-0" id="team">
            <h3 className="text-center bg-dark-2 text-light pt-4 pb-4 mt-0 mb-5">PUBLICATIONS</h3>
            <Paper 
                name="Implementation of Neuro-inspired Arithmetic and Logic Circuits by Using Josephson Junction Based Artificial Neurons"
                writers = "Altay Karamüftüoğlu, Ali Bozbey, Murat Özbayoğlu"
                date="IEEE International Superconductive Electronics Conference, ISEC 2019, July 28, August 1, Riverside, CA." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Review of tool condition monitoring of machining processes and opportunities for new trends in deep learning" 
                writers="G. Serin, B. Sener, A.M. Ozbayoglu, H.O. Unver" 
                date="FAIM 2019 - 29th International Conference on Flexible Automation and Intelligent Manufacturing, 24-28 June, 2019, University of Limerick, Ireland." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Financial Forecasting using Deep Learning with an optimized trading strategy" 
                writers="A. Maratkhan, I. Ilyassov, M. Aitzhanov, M.F. Demirci, A.M. Ozbayoglu"
                date="IEEE Congress on Evolutionary Computation, CEC 2019, 10-13 June 2019, Wellington, New Zealand." 
                link={FinancialForecasting} 
                pdflink={FinancialForecastingPrev1} pdflink2={FinancialForecastingPrev2} pdflink3={FinancialForecastingPrev3} pdflink4={FinancialForecastingPrev4}
                abstract="Financial forecasting using computational intelligence nowadays remains a hot topic. Recent improvements
                in deep neural networks allow us to predict financial market
                behavior. In our work we first implement a novel approach
                of [1], which converts financial time-series data to 2-D images
                and then feeds the generated images to a convolutional neural
                network as an input. We then hypothesize that the performance of the model can be improved using different techniques.
                Specifically, in our work, we improve the computational and
                financial performance of the previous approach by 1) fine-tuning
                the neural network hyperparameters, 2) creating images with
                5 channels corresponding to indicator clusters, 3) improving
                financial evaluation using take profit and stop loss techniques,
                4) evolutionary optimized parameters for trading strategy. The
                results of this study show that the above-mentioned strategies
                improve the model considerably. We conclude with future work
                that can be done in order to further improve the computational
                and financial performance of the model."
            />
            <Paper 
                name="Integrated energy-efficient machining of rotary impellers and multi-objective optimization" 
                writers="G. Serin, B. Sener, A.M. Ozbayoglu, H.O. Unver"
                date="Materials and Manufacturing Processes, pp. 1-13, DOI: 10.1080/10426914.2019.1605177" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Menu Optimization for Multi-Profile Customer Systems on Large Scale Data" 
                writers="Jeyhun Karimov, Murat Ozbayoglu, Bulent Tavli"
                date="Informatica, revision requested" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Automated Image Analysis and Contiguity Estimation for Liquid Phase Sintered Tungsten Heavy Alloys" 
                writers="A. Murat Ozbayoglu, Nuri Durlu, N. Kaan Caliskan"
                date="arXiv preprint, arXiv:1902.05382" 
                link={AutomatedImage} 
                pdflink={AutomatedImagePrev1} pdflink2={AutomatedImagePrev2} pdflink3={AutomatedImagePrev3} pdflink4={AutomatedImagePrev4}
                abstract="In this study an automated software model using digital image processing techniques is proposed for extracting the image characteristics and contiguity of
                liquid phase sintered tungsten heavy alloys. The developed model takes a typical image as input and processes it with no human intervention and provides the
                corresponding image characteristics and contiguity value. The image processing
                algorithm includes segmentation, binding point extraction, phase connection,
                particle count and contiguity estimation stages. For the output, microstructural parameters such as tungsten particle size, amount of tungsten phase and
                contiguity are determined. The model is implemented by using 6 different scanning electron microscope images of liquid phase sintered 90W-7Ni-3Fe and 93W4.9Ni-2.1Fe allloys. The results indicate that relative to the manual measurements, the automated model can correctly estimate the contiguity with an error
                in the vicinity of 5.6% - 2.9% for these two alloys. The developed software can
                easily be adapted to be used for other microstructures. It is also provided as
                open-source and available for other researchers."
            />
            <Paper 
                name="Financial Trading Model with Stock Bar Image Time Series with Deep Convolutional Neural Networks" 
                writers="Ömer Berat Sezer, A. Murat Ozbayoglu"
                date="Intelligent Automation and Soft Computing, in press" 
                link={AlgorithmicFinancialTrading} 
                pdflink={AlgorithmicFinancialTradingPrev1} pdflink2={AlgorithmicFinancialTradingPrev2} pdflink3={AlgorithmicFinancialTradingPrev3} pdflink4={AlgorithmicFinancialTradingPrev4}
                abstract="Computational intelligence techniques for financial trading systems have always been quite popular. In
                the last decade, deep learning models start getting more attention, especially within the image processing
                community. In this study, we propose a novel algorithmic trading model CNN-TA using a 2-D convolutional neural network based on image processing properties. In order to convert financial time series
                into 2-D images, 15 different technical indicators each with different parameter selections are utilized.
                Each indicator instance generates data for a 15 day period. As a result, 15 × 15 sized 2-D images are constructed. Each image is then labeled as Buy, Sell or Hold depending on the hills and valleys of the original
                time series. The results indicate that when compared with the Buy & Hold Strategy and other common
                trading systems over a long out-of-sample period, the trained model provides better results for stocks
                and ETFs."
            />
            <Paper 
                name="Neural Network based Instant Parameter Prediction for Wireless Sensor Network Optimization Models" 
                writers="Murat Ozbayoglu, Ayhan Akbas, Huseyin Ugur Yildiz, Bulent Tavli"
                date="Wireless Networks, pp. 1-14" 
                link={InsParamPrediction} 
                pdflink={InsParamPredictionPrev1} pdflink2={InsParamPredictionPrev2} pdflink3={InsParamPredictionPrev3} pdflink4={InsParamPredictionPrev4}
                abstract="Optimal operation configuration of a Wireless Sensor Network (WSN)
                can be determined by utilizing exact mathematical programming techniques such
                as Mixed Integer Programming (MIP). However, computational complexities of such
                techniques are high. As a remedy, learning algorithms such as Neural Networks (NNs)
                can be utilized to predict the WSN settings with high accuracy with much lower computational cost than the MIP solutions. We focus on predicting network lifetime,
                transmission power level, and internode distance which are interrelated WSN parameters and are vital for optimal WSN operation. To facilitate an efficient solution for predicting these parameters without explicit optimizations, we built NN based
                models employing data obtained from an MIP model. The NN based scalable prediction model yields a maximum of 3% error for lifetime, 6% for transmission power
                level error, and internode distances within an accuracy of 3 meters in prediction
                outcomes."
            />
            <Paper 
                name="Computational Intelligence Models for PIV based Particle (Cuttings) Direction and Velocity Estimation in Multi-Phase Flows" 
                writers="Hatice Tombul, Murat Ozbayoglu, Evren Ozbayoglu"
                date="Journal of Petroleum Science & Engineering, vol 172, Jan 2019, pp. 547-558" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="MIS-IoT: Modular Intelligent Server Based Internet of Things Framework with Big Data and Machine Learning" 
                writers="A.C. Onal, O.B. Sezer, M. Ozbayoglu, E. Dogdu"
                date="IEEE International Conference on Big Data, 2018, pp. 2270-2279, 10-13 December 2018, Seattle, WA, USA." 
                link={ModularIntelligentServer} 
                pdflink={ModularIntelligentServerPrev1} pdflink2={ModularIntelligentServerPrev2} pdflink3={ModularIntelligentServerPrev3} pdflink4={ModularIntelligentServerPrev4}
                abstract="Internet of Things world is getting bigger everyday
                with new developments in all fronts. The new IoT world requires
                better handling of big data and better usage with more intelligence integrated in all phases. Here we present MIS-IoT (Modular
                Intelligent Server Based Internet of Things Framework with Big
                Data and Machine Learning) framework, which is “modular”
                and therefore open for new extensions, “intelligent” by providing
                machine learning and deep learning methods on “big data”
                coming from IoT objects, “server-based” in a service-oriented
                way by offering services via standart Web protocols. We present
                an overview of the design and implementation details of MISIoT along with a case study evaluation of the system, showing
                the intelligence capabilities in anomaly detection over real-time
                weather data."
            />
            <Paper 
                name="Anomaly Detection in Vehicle Traffic with Image Processing and Machine Learning" 
                writers="Selim Sefa Sarikan, Murat Ozbayoglu"
                date="Complex Adaptive Systems 2018, Procedia Computer Science, vol 140, pp. 64-69, 5-7 November 2018, Chicago, USA" 
                link={AnomalyDetect} 
                pdflink={AnomalyDetectPrev1} pdflink2={AnomalyDetectPrev2} pdflink3={AnomalyDetectPrev3} pdflink4={AnomalyDetectPrev4}
                abstract="Anomaly detection is an important part of an Intelligent Transportation System. In this study, image processing and machine learning techniques are used to detect anomalies in vehicle movements. These anomalies include standing and traveling in reverse direction. Images are captured using CCTV cameras from front and rear side of the vehicle. This capability makes the results robust to the variations in operational and environmental conditions. Multiple consecutive frames are acquired for motion detection. Features such as edges and license plate corner locations are extracted for tracking purposes. Direction of the traffic flow is obtained from the trained classifier. K-nearest neighbor is chosen as the classifier model. The proposed method is evaluated on a public highway and promising detection results are achieved."
            />
            <Paper 
                name="Optimized GPU Implementation of JPEG 2000 for Satellite Image Decompression" 
                writers="Dervis Utku Ufuk, Alptekin Temizel, Ahmet Murat Ozbayoglu"
                date="CSE 2018, 21st IEEE International Conference on Computational Science and Enginerering, pp. 56-61, 29-31 October 2018, Bucharest, Romania" 
                link={SatelliteImageDecomp} 
                pdflink={SatelliteImageDecompPrev1} pdflink2={SatelliteImageDecompPrev2} pdflink3={SatelliteImageDecompPrev3} pdflink4={SatelliteImageDecompPrev4}
                abstract="JPEG 2000 is a powerful yet computationally complex image compression algorithm which is widely used in remote
                sensing applications. In this work, we focus on speeding-up the
                decompression algorithm by applying various GPU optimization
                techniques. We have conducted numerous experiments on highresolution satellite images in two operational modes; a synchronous mode and an asynchronous batch mode. We share our
                experiment results and make performance evaluations regarding
                each operational mode and optimization method separately.
                Finally we propose an optimized GPU architecture for satellite
                image decompression and compare the achieved performance
                with a multi-threaded CPU architecture."
            />
            <Paper 
                name="Classification of Turkish Documents using Paragraph Vector" 
                writers="Mustafa Sari, Murat Ozbayoglu"
                date="International Conference on Artificial Intelligence and Data Processing 18, 27-28 Sept 2018, Malatya, Turkey" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Perceptions, Expectations and Implementations of Big Data in Public Sector" 
                writers="Erdogan Dogdu, Murat Ozbayoglu, Ali Yazici, Ziya Karakaya"
                date="UBMK'18, International Conference on Computer Engineering, pp. 615-620, 20-23 September 2018, Sarajevo, Bosnia-Herzegovina" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Load and PV Generation Forecast Based Cost Optimization for Nanogrids with PV and Battery" 
                writers="Ugur Gudelek, Cem Cirak, Efe Arin, Erdem Sezgin, Murat Ozbayoglu and Murat Gol"
                date="2018 53rd International Universities Power Engineering Conference (UPEC), 4-7 September 2018, Glasgow, Scotland" 
                link={LoadAndPv} 
                pdflink={LoadAndPvPrev1} pdflink2={LoadAndPvPrev2} pdflink3={LoadAndPvPrev3} pdflink4={LoadAndPvPrev4}
                abstract="Power system resiliency and robustness became
                major concerns of the system operators and researchers after
                the introduction of the smart grid concept. The improvements
                in the battery storage systems (BSS) and the photovoltaic (PV)
                systems encourage power systems operators to enable the use
                of those systems in resiliency and robustness studies. Utilization
                of those systems not only contributes to the robustness of the
                power systems but also decrease the operational costs. There are
                several methods in literature to operate the grid systems with
                partitions of PV and BSS in the most economical way. Although
                these methods are straightforward and work fine, they can not
                guarantee the most economical result on a daily basis. In this
                paper, deep learning based PV generation and load forecasts are
                used to improve the results of optimization in terms of economic
                aspects in nano-grid applications. In the considered system,
                there are loads, PV generation units, BSS and grid connection.
                Bi-directional power flow is permitted between the main grid
                and the nano-grid system. The forecasting methodologies and
                used optimization algorithms will be explained in this paper."
            />
            <Paper 
                name="Predicting the pressure losses while the drillstring is buckled and rotating using artificial intelligence methods" 
                writers="Evren Ozbayoglu, Oney Erge, Murat Ozbayoglu"
                date="Journal of Natural Gas Science & Engineering, volume 56, August 2018, pp. 72-80" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Algorithmic Financial Trading with Deep Convolutional Neural Networks: Time Series to Image Conversion Approach" 
                writers="Ömer Berat Sezer, A. Murat Ozbayoglu"
                date="Applied Soft Computing, volume 70, September 2018, pp. 525-538" 
                link={ImageConversionApproach} 
                pdflink={ImageConversionApproachPrev1} pdflink2={ImageConversionApproachPrev2} pdflink3={ImageConversionApproachPrev3} pdflink4={ImageConversionApproachPrev4}
                abstract="Computational intelligence techniques for financial trading systems have always been quite popular. In
                the last decade, deep learning models start getting more attention, especially within the image processing
                community. In this study, we propose a novel algorithmic trading model CNN-TA using a 2-D convolutional neural network based on image processing properties. In order to convert financial time series
                into 2-D images, 15 different technical indicators each with different parameter selections are utilized.
                Each indicator instance generates data for a 15 day period. As a result, 15 × 15 sized 2-D images are constructed. Each image is then labeled as Buy, Sell or Hold depending on the hills and valleys of the original
                time series. The results indicate that when compared with the Buy & Hold Strategy and other common
                trading systems over a long out-of-sample period, the trained model provides better results for stocks
                and ETFs."
            />
            <Paper 
                name="Satellite Image Band Registration with Dynamic Time Warping and Discrete Wavelet Transform" 
                writers="D. Utku Ufuk, Ibrahim S. Acikgoz, Mustafa Teke , A. Murat Ozbayoglu"
                date="IEEE Conference on Signal Processing and Communications Applications (SIU 2018), 2-5 May, Cesme, Izmir, Turkey." 
                link={SatelliteImageBand} 
                pdflink={SatelliteImageBandPrev1} pdflink2={SatelliteImageBandPrev2} pdflink3={SatelliteImageBandPrev3} pdflink4={SatelliteImageBandPrev4}
                abstract="Due to the imperfect physical arrangement of camera sensors, spectral bands of ground observation satellite images are usually shifted relative to each other. In order to address this issue, we propose a computationally simple band registration method which is based on Dynamic Time Warping (DTW) and Discrete Wavelet Transform (DWT) algorithms. This method has been tested on 10 frames of GÖKTÜRK-2 images and compared to a Scale-Invariant Feature Transform (SIFT) based method. In terms of quality, the proposed method have yielded very close results compared to SIFT."
            />
            <Paper 
                name="Deep Convolutional Autoencoder for Radar-Based Classification of Similar Aided and Unaided Human Activities" 
                writers="M.S. Seyfioğlu, A.M. Ozbayoglu, S.Z. Gürbüz"
                date="IEEE Transactions on Aerospace and Electronic Systems, volume 54, Issue 4, August 2018, pp. 1709-1723" 
                link={ConvolutionalAutoencoder} 
                pdflink={ConvolutionalAutoencoderPrev1} pdflink2={ConvolutionalAutoencoderPrev2} pdflink3={ConvolutionalAutoencoderPrev3} pdflink4={ConvolutionalAutoencoderPrev4}
                abstract="Radar-based activity recognition is a problem that has been of
                great interest due to applications such as border control and security, pedestrian identification for automotive safety, and remote
                health monitoring. This paper seeks to show the efficacy of microDoppler analysis to distinguish even those gaits whose micro-Doppler
                signatures are not visually distinguishable. Moreover, a three-layer,
                deep convolutional autoencoder (CAE) is proposed, which utilizes
                unsupervised pretraining to initialize the weights in the subsequent
                convolutional layers. This architecture is shown to be more effective
                than other deep learning architectures, such as convolutional neural
                networks and autoencoders, as well as conventional classifiers employing predefined features, such as support vector machines (SVM),
                random forest, and extreme gradient boosting. Results show the performance of the proposed deep CAE yields a correct classification rate
                of 94.2% for micro-Doppler signatures of 12 different human activities measured indoors using a 4 GHz continuous wave radar—17.3%
                improvement over SVM."
            />
            <Paper 
                name="Automated Generation of Attack Graphs Using NVD" 
                writers="M. Ugur Aksu, Kemal Bicakci, M. Hadi Dilek, A. Murat Ozbayoglu"
                date="CODASPY '18, The 8th ACM Conference on Data and Application Security and Privacy, pp. 135-142, 19-21 March, Tempe, AZ, USA." 
                link={AutomatedGen} 
                pdflink={AutomatedGenPrev1} pdflink2={AutomatedGenPrev2} pdflink3={AutomatedGenPrev3} pdflink4={AutomatedGenPrev4}
                abstract="Today’s computer networks are prone to sophisticated multi-step,
                multi-host attacks. Common approaches of identifying vulnerabilities and analyzing the security of such networks with naive methods such as counting the number of vulnerabilities, or examining the
                vulnerabilities independently produces incomprehensive and limited security assessment results. On the other hand, attack graphs
                generated from the identified vulnerabilities at a network illustrate
                security risks via attack paths that are not apparent with the results
                of the primitive approaches. One common technique of generating attack graphs requires well established definitions and data of
                prerequisites and postconditions for the known vulnerabilities. A
                number of works suggest prerequisite and postcondition categorization schemes for software vulnerabilities. However, generating
                them in an automated way is an open issue. In this paper, we first
                define a model that evolves over the previous works to depict the
                requirements of exploiting vulnerabilities for generating attack
                graphs. Then we describe and compare the results of two different
                novel approaches (rule-based and machine learning-employed) that
                we propose for generating attacker privilege fields as prerequisites
                and postconditions from the National Vulnerability Database (NVD)
                in an automated way. We observe that prerequisite and postcondition privileges can be generated with overall accuracy rates of
                88,8 % and 95,7 % with rule-based and machine learning-employed
                (Multilayer Perceptron) models respectively."
            />
            <Paper 
                name="Context Aware Computing, Learning and Big Data in Internet of Things: A Survey" 
                writers="Ömer Berat Sezer, Erdoğan Doğdu, A. Murat Ozbayoglu"
                date="IEEE Internet of Things Journal, volume 5, Issue 1, February 2018, pp. 1-27" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Automated Image Matching and New Readings for Cyrus the Great's 547 BC Campaign in the Nabonidus Chronicle (BM 35382 = ABC 7)." 
                writers="Adalı, S.F., Demirci, M.F., Özbayoğlu, A.M."
                date="Die Welt des Orients, vol 47, No:2, pp. 153-185." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Weather Data Analysis and Sensor Fault Detection using an Extended IoT Framework with Semantics, Big Data, and Machine Learning" 
                writers="A.C. Onal, O.B. Sezer, M. Ozbayoglu, E. Dogdu"
                date="IEEE International Conference on Big Data, 2017, 13-15 December, Boston, MA, USA." 
                link={SensorFault} 
                pdflink={SensorFaultPrev1} pdflink2={SensorFaultPrev2} pdflink3={SensorFaultPrev3} pdflink4={SensorFaultPrev4}
                abstract="In recent years, big data and Internet of Things
                (IoT) implementations started getting more attention. Researchers focused on developing big data analytics solutions using
                machine learning models. Machine learning is a rising trend
                in this field due to its ability to extract hidden features and
                patterns even in highly complex datasets. In this study, we used
                our Big Data IoT Framework in a weather data analysis use
                case. We implemented weather clustering and sensor anomaly
                detection using a publicly available dataset. We provided the
                implementation details of each framework layer (acquisition,
                ETL, data processing, learning and decision) for this particular
                use case. Our chosen learning model within the library is ScikitLearn based k-means clustering. The data analysis results indicate
                that it is possible to extract meaningful information from a
                relatively complex dataset using our framework."
            />
            <Paper 
                name="Estimation of Parameters for the Free-Form Machining with Deep Neural Net" 
                writers="G. Serin, U. Güdelek, A.M. Özbayoğlu, H.Ö. Ünver"
                date="IEEE International Conference on Big Data, 2017, 13-15 December, Boston, MA, USA." 
                link={EstimationOfParameters} 
                pdflink={EstimationOfParametersPrev1} pdflink2={EstimationOfParametersPrev2} pdflink3={EstimationOfParametersPrev3} pdflink4={EstimationOfParametersPrev4}
                abstract="Predictive Analytics is a crucial part of a Big Data application. Lately, developers have turned their attention to deep
                learning models due to their huge success in various implementations. Meanwhile, there is lack of deep learning
                implementations in manufacturing applications due to insufficient data. This phenomenon has been slowly shifting due to
                the application of IoT and Industry 4.0 concept within the manufacturing industry. Streaming and batch data producing
                sources are becoming more and more common in the machining industry. In this paper, we propose a deep learning
                predictive analytics model based on the data generated by a particular machining process. The results indicate that using
                such a model can make very accurate predictions and can be used as part of a real-time decision-making process in the
                manufacturing industry. In this study, the prediction models of three crucial metrics of machining such as quality,
                performance and energy consumption have been developed by utilizing artificial neural networks and deep learning
                methods. Specific measures of quality, performance and energy consumption refer to material removal rate (MRR),
                surface roughness (Ra) and specific energy consumption (SEC) respectively. The control parameters of machining are
                selected as stepover (ae), depth of cut (ap), feed per tooth (fz) and cutting speed (Vc). In addition, variance analysis
                (ANOVA) has been used to examine the effects of the input parameters on the output parameters."
            />
            <Paper 
                name="A Deep Learning based Stock Trading Model with 2-D CNN Trend Detection" 
                writers="M.U. Güdelek, S.A. Bölük, A.M. Özbayoğlu"
                date="IEEE Computational Intelligence in Financial Engineering (IEEE CIFEr 2017) in IEEE Symposium Series on Computational Intelligence (IEEE SSCI 2017), Honolulu, HI, USA, 27 November-1 December, 2017." 
                link={CNNTrend} 
                pdflink={CNNTrendPrev1} pdflink2={CNNTrendPrev2} pdflink3={CNNTrendPrev3} pdflink4={CNNTrendPrev4}
                abstract="The success of convolutional neural networks in the
                field of computer vision has attracted the attention of many
                researchers from other fields. One of the research areas in
                which neural networks is actively used is financial forecasting.
                In this paper, we propose a novel method for predicting stock
                price movements using CNN. To avoid the high volatility of the
                market and to maximize the profit, ETFs are used as primary
                financial assets. We extract commonly used trend indicators and
                momentum indicators from financial time series data and use
                these as our features. Adopting a sliding window approach,
                we generate our images by taking snapshots that are bounded
                by the window over a daily period. We then perform daily
                predictions, namely, regression for predicting the ETF prices and
                classification for predicting the movement of the prices on the
                next day, which can be modified to estimate weekly or monthly
                trends. To increase the number of images, we use numerous ETFs.
                Finally, we evaluate our method by performing paper trading
                and calculating the final capital. We also compare our method’s
                performance to commonly used classical trading strategies. Our
                results indicate that we can predict the next day’s prices with
                72% accuracy and end up with 5:1 of our initial capital, taking
                realistic values of transaction costs into account."
            />
            <Paper 
                name="Quora Duplicate Query Elimination" 
                writers="Efe Arın, Uğur Gudelek, Murat Özbayoğlu"
                date="LTC '17, 8th Language and Technology Conference, 17-19 November, Poznan, Poland, 2017." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="An artificial neural network based power prediction model for rough cutting of AISI 304" 
                writers="G. Serin, M. Kahya, A.M. Özbayoğlu, H.Ö. Ünver"
                date="8th International Symposium on Machining, 2-4 November, Antalya, Turkey, 2017." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Investigation of rough milling of Ti6A14V using response surface methodology" 
                writers="M. Kahya, G. Serin, A.M. Özbayoğlu, H.Ö. Ünver"
                date="8th International Symposium on Machining, 2-4 November, Antalya, Turkey, 2017." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="A Deep Neural-Network Based Stock Trading System Based on Evolutionary Optimized Technical Analysis Parameters" 
                writers="O.B. Sezer, M. Ozbayoglu, E. Dogdu"
                date="Procedia - Computer Sciences - Complex Adaptive Systems, vol 114, pp. 473-480, 30 October-1 November, Chicago, IL, USA, 2017." 
                link={StockTradingSystem2} 
                pdflink={StockTradingSystem2Prev1} pdflink2={StockTradingSystem2Prev2} pdflink3={StockTradingSystem2Prev3} pdflink4={StockTradingSystem2Prev4}
                abstract="In this study, we propose a stock trading system based on optimized technical analysis parameters for creating buy-sell points
                using genetic algorithms. The model is developed utilizing Apache Spark big data platform. The optimized parameters are then
                passed to a deep MLP neural network for buy-sell-hold predictions. Dow 30 stocks are chosen for model validation. Each Dow
                stock is trained separately using daily close prices between 1996-2016 and tested between 2007-2016. The results indicate that
                optimizing the technical indicator parameters not only enhances the stock trading performance but also provides a model that
                might be used as an alternative to Buy and Hold and other standard technical analysis models."
            />
            <Paper 
                name="Automated Vehicle Classification with Image Processing and Computational Intelligence" 
                writers="S.S. Sarikan, A.M. Ozbayoglu, O. Zilci"
                date="Procedia - Computer Sciences - Complex Adaptive Systems, vol 114, pp. 515-522, 30 October-1 November, Chicago, IL, USA, 2017." 
                link={AutomatedVehicleClass} 
                pdflink={AutomatedVehicleClassPrev1} pdflink2={AutomatedVehicleClassPrev2} pdflink3={AutomatedVehicleClassPrev3} pdflink4={AutomatedVehicleClassPrev4}
                abstract="Classification of vehicles is an important part of an Intelligent Transportation System. In this study, image processing and
                machine learning techniques are used to classify vehicles in dedicated lanes. Images containing side view profile of vehicles are
                constructed using a commercially available light curtain. This capability makes the results robust to the variations in operational
                and environmental conditions. Time warping is applied to compensate for speed variations in traffic. Features such as windows
                and hollow areas are extracted to discriminate motorcycles against automobiles. The circularity and skeleton complexity values
                are used as features for the classifier. K-nearest neighbor and decision tree are chosen as the classifier models. The proposed
                method is evaluated on a public highway and promising classification results are achieved."
            />
            <Paper 
                name="Feature diverse hierarchical classification of human gait with CW radar for assisted living" 
                writers="Mehmet Saygın Seyfioğlu, A. Serinoz, Ahmet Murat Özbayoğlu, Sevgi Zübeyde Gürbüz"
                date="International Conference on Radar Systems (Radar 2017), 23-26 October. Belfast, UK, 2017." 
                link={CWRadar} 
                pdflink={CWRadarPrev1} pdflink2={CWRadarPrev2} pdflink3={CWRadarPrev3} pdflink4={CWRadarPrev4}
                abstract="Activity recognition and estimation of gait parameter are medically essential components of remote health monitoring systems that can improve quality of life, enable personalized treatments, acquire continual medical data to better inform doctors of the patient's well-being, reduce health costs, and ensure rapid response to medical emergencies. Discriminating between a large number of oftentimes similar activities using the radar micro-Doppler effect, however, requires extraction of features that can capture differences in nuances within the signatures. This optimal feature set varies according to the number and type of classes involved. Thus, this work proposes a novel feature diverse hierarchical classification structure, which prevents significant sources of confusion between classes. Our results show a 19% reduction in confusion between creeping and crawling and an elimination of confusion between falling and walking, yielding an overall 7.3% performance improvement above a multi-class support vector machine classifier."
            />
            <Paper 
                name="Development of Superconductor Integrated Logic Circuit Design with Artificial Neural Network Structure" 
                writers="Altay Karamüftüoğlu, Ali Bozbey, Murat Özbayoğlu"
                date="International Conference on Condensed Matter and Materials Science, 11-15 October, Adana, Turkey, 2017." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Big and Open Data Analytics with Deep Learning, pp. 115-130" 
                writers="Özbayoğlu, A.M."
                date="In: Big Data and Open Data Analytics: Methods and Applications, Editors: Şeref Sağıroğlu, Orhan Koç, Grafiker Publishing, ISBN: 978-605-9247-59-7, October 2017." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Deep learning of micro-Doppler features for aided and unaided gait recognition" 
                writers="Mehmet Saygın Seyfioğlu, Sevgi Zübeyde Gürbüz, Ahmet Murat Özbayoğlu, Melda Yüksel"
                date="IEEE 2017 Radar Conference, pp. 1125-1130. 8-12 May. Seattle, WA, USA, 2017." 
                link={MicroDoppler} 
                pdflink={MicroDopplerPrev1} pdflink2={MicroDopplerPrev2} pdflink3={MicroDopplerPrev3} pdflink4={MicroDopplerPrev4}
                abstract="Remote health monitoring is a topic that has
                gained increased interest as a way to improve the quality and
                reduce costs of health care, especially for the elderly. Falling is
                one of the leading causes for injury and death among the
                elderly, and gait recognition can be used to detect and monitor
                neuromuscular diseases as well as emergency events such as
                heart attack and seizures. In this work, the potential for radar
                to discriminate a large number of classes of human aided and
                unaided motion is demonstrated. Deep learning of microDoppler features is used with a 3-layer auto-encoder structure
                to achieve 89% correct classification, a 17% improvement in
                performance over the benchmark support vector machine
                classifier supplied with 127 pre-defined features."
            />
            <Paper 
                name="An Artificial Neural Network-based Stock Trading System Using Technical Analysis and Big Data Framework" 
                writers="O.B. Sezer, M. Ozbayoglu, E. Dogdu"
                date="ACM Southeast Conference, ACMSE 2017, 13-15 April, Kennesaw State University, GA, USA." 
                link={StockTradingSystem} 
                pdflink={StockTradingSystemPrev1} pdflink2={StockTradingSystemPrev2} pdflink3={StockTradingSystemPrev3} pdflink4={StockTradingSystemPrev4}
                abstract="In this paper, a neural network-based stock price prediction and trading system using technical analysis indicators is presented. The model developed first converts the financial time series data into a series of buy-sell-hold trigger signals using the most commonly preferred technical analysis indicators. Then, a Multilayer Perceptron (MLP) artificial neural network (ANN) model is trained in the learning stage on the daily stock prices between 1997 and 2007 for all of the Dow30 stocks. Apache Spark big data framework is used in the training stage. The trained model is then tested with data from 2007 to 2017. The results indicate that by choosing the most appropriate technical indicators, the neural network model can achieve comparable results against the Buy and Hold strategy in most of the cases. Furthermore, fine tuning the technical indicators and/or optimization strategy can enhance the overall trading performance."
            />
            <Paper 
                name="An ontology-based multi-agent virtual enterprise system (OMAVE): part 2: partner selection" 
                writers="Bahram Lotfi Sadigh, Shahrzad Nikghadam, A. Murat Ozbayoglu, Hakki Ozgur Unver, Erdogan Dogdu and S. Engin Kilic"
                date="International Journal of Computer Integrated Manufacturing, 31 January 2017" 
                link={OntologyBased2} 
                pdflink={OntologyBased2Prev1} pdflink2={OntologyBased2Prev2} pdflink3={OntologyBased2Prev3} pdflink4={OntologyBased2Prev4}
                abstract="A virtual enterprise (VE) is a collaboration model between multiple business partners in a value chain. The VE model is
                particularly feasible and appropriate for small- and medium-sized enterprises (SMEs) and industrial parks containing
                multiple SMEs that have different vertical competencies. The VE consortium’s success highly depends on its members.
                Therefore, it is crucial to select the most appropriate enterprises when forming a VE consortium. In this study, a new multiagent hybrid partner selection algorithm is developed for application in the development of an ontology-based multi-agent
                virtual enterprise (OMAVE) system. In this platform, the agent’s interactions are supported by agent ontology, which
                provides concepts, properties and all message formats for the agents. Different types of agents collaborate and compete with
                each other so that unqualified or inefficient enterprises are eliminated from the enterprise pool. Only the remaining
                enterprises would be allowed to enter the negotiation process and propose in the bidding. The agent-based auctioning
                platform is coupled with a fuzzy–AHP–TOPSIS algorithm to evaluate partners based on their proposals and background.
                Accordingly, the winning enterprise for each task is identified and the whole project can be accomplished by assigning tasks
                to the responsible partners. To test and verify the functionality of the developed OMAVE system, a sample module using
                OMAVE applications and tools was manufactured. The last section of this paper presents the results of this case study,
                which validate the applicability of the proposed technique."
            />
            <Paper 
                name="An Extended IoT Framework with Semantics, Big Data, and Analytics" 
                writers="O.B. Sezer, E. Dogdu, M. Ozbayoglu, A.C. Onal"
                date="IEEE International Conference on Big Data, 2016, pp.1849-1856. 5-8 December. Washington, DC, USA." 
                link={ExtendedIoTFramework} 
                pdflink={ExtendedIoTFrameworkPrev1} pdflink2={ExtendedIoTFrameworkPrev2} pdflink3={ExtendedIoTFrameworkPrev3} pdflink4={ExtendedIoTFrameworkPrev4}
                abstract="Many experts claim that data will be the most
                valuable commodity in the 21st century. At the same time, two of
                the most influential components of this era, Big Data and IoT are
                moving very fast, on a collision course with the methodologies that
                are associated with conventional data processing and database
                systems. As a result, new approaches like NoSQL databases,
                distributed architectures, etc. started appearing on the stage.
                Meanwhile, another technology, ontology and semantic data
                processing can be a very convenient catalyzer that might assist in
                smoothly providing this transformation process. In this paper, we
                propose a combined framework that brings Big Data, IoT, and
                semantic web together to build an augmented framework for this
                new era. We not only list the components of such a system and
                define the necessary bindings that needs to be integrated together,
                but also provide a realistic use case that demonstrates how the
                model can implement the desired functionality and achieve the
                goals of such a model."
            />
            <Paper 
                name="A Real-Time Autonomous Highway Accident Detection Model Based on Big Data Processing and Computational Intelligence" 
                writers="M. Ozbayoglu, G. Küçükayan, E. Doğdu"
                date="IEEE International Conference on Big Data, 2016, pp. 1807-1813. 5-8 December. Washington, DC, USA." 
                link={HighwayAccidentDetectionModel} 
                pdflink={HighwayAccidentDetectionModelPrev1} pdflink2={HighwayAccidentDetectionModelPrev2} pdflink3={HighwayAccidentDetectionModelPrev3} pdflink4={HighwayAccidentDetectionModelPrev4}
                abstract="Due to increasing urban population and growing
                number of motor vehicles, traffic congestion is becoming a major
                problem of the 21st century. One of the main reasons behind traffic congestion is accidents which can not only result in casualties
                and losses for the participants, but also in wasted and lost time
                for the others that are stuck behind the wheels. Early detection of
                an accident can save lives, provides quicker road openings, hence
                decreases wasted time and resources, and increases efficiency.
                In this study, we propose a preliminary real-time autonomous
                accident-detection system based on computational intelligence
                techniques. Istanbul City traffic-flow data for the year 2015 from
                various sensor locations are populated using big data processing
                methodologies. The extracted features are then fed into a nearest
                neighbor model, a regression tree, and a feed-forward neural
                network model. For the output, the possibility of an occurrence
                of an accident is predicted. The results indicate that even though
                the number of false alarms dominates the real accident cases, the
                system can still provide useful information that can be used for
                status verification and early reaction to possible accidents."
            />
            <Paper 
                name="A Survey on Semantic Web and Big Data Technologies for Social Network Analysis" 
                writers="S. Kulcu, E. Doğdu, M. Ozbayoglu"
                date="IEEE International Conference on Big Data, 2016, pp.1768-1777. 5-8 December. Washington, DC, USA." 
                link={SurveySemantic} 
                pdflink={SurveySemanticPrev1} pdflink2={SurveySemanticPrev2} pdflink3={SurveySemanticPrev3} pdflink4={SurveySemanticPrev4}
                abstract="Social Network Analysis (SNA) has become a very
                important and increasingly popular topic among researchers
                in recent years especially after emerging Semantic Web
                and Big Data technologies. Social networking services such
                as Facebook, Google+, Twitter, etc. provide large amounts
                of data that can be used for social network analysis by
                researchers. Semantic Web technology plays an important
                role for collecting, merging, and aggregating social network
                data from heterogeneous sources more easily, robustly and
                in an interoperable manner. Today, data scientists use several
                different frameworks for querying, integrating and analyzing
                datasets located at different sources. Meanwhile, most of the big
                social data is in unstructured or semi-structured format. Big
                data architectures allow researchers to analyze unstructured
                data in a time and cost-efficient way. New approaches for
                SNA are needed to combine Semantic Web and Big Data
                technologies in order to utilize and add capabilities to existing
                solutions. To be able to analyze large scale social networks,
                algorithms should have scalable designs in order to benefit
                from the emerging Big Data technologies. This survey focuses
                on recently developed systems for SNA and summarizes the
                state-of-the-art technologies used by them and points out to
                future research directions."
            />
            <Paper 
                name="A Structurally Enhanced Fuzzy Inference System Partner Selection Technique In Forming Virtual Enterprise" 
                writers="S. Nikghadam, H.O. Unver, A.M. Ozbayoglu, S.E. Kilic"
                date="INFORMS 2016, 13-16 November, Nashville, TN, USA." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Design of a Customer's Type Based Algorithm for Partner Selection Problem of Virtual Enterprise" 
                writers="S. Nikghadam, A.M. Ozbayoglu, H.O. Unver, S.E. Kilic"
                date="Procedia - Computer Sciences - Complex Adaptive Systems, Vol. 95, pp.467-474. 2-4 November. Los Angeles, CA, USA." 
                link={CustomersType} 
                pdflink={CustomersTypePrev1} pdflink2={CustomersTypePrev2} pdflink3={CustomersTypePrev3} pdflink4={CustomersTypePrev4}
                abstract="Virtual Enterprise (VE) is a temporary platform for individual enterprises to collaborate with each other, sharing their core
                competencies to fulfill a customer demand. In order to improve the customer satisfaction, the most successful VEs select their
                consortium’s members based on customer’s preferences. There is quite extensive literature in the field of partner selection in VE,
                each proposing a new approach to evaluate and select the most appropriate partners among pool of enterprises. However, none of
                the studies in literature recommend which partner selection methodology should be used in each project with a particular
                customer attitude. In this study an algorithm is proposed which classifies the customers into three categories; passive, standard
                and assertive. Three different approaches; Fuzzy Logic- FAHP TOPSIS and Goal programming are used for each customer type
                respectively. This classification is beneficial since the problem’s characteristics; such as vagueness of data, change as the
                customer’s attitude varies. The results certify that, adopting this algorithm not only helps the VE to select the most appropriate
                partners based on customer preferences, but also the model adapts itself to each customer’s attitude. As a result, the overall
                system flexibility is significantly improved."
            />
            <Paper 
                name="Yapay Sinir Ağları ile Kullanıcı Profilleme ve Konfor Seviyesi Tahmini." 
                writers="Güneş, U., Elbir, Ö., Özbayoğlu, A.M."
                date="International Artificial Intelligence and Data Processing Symposium (IDAP- 16), pp. 413-418, İnönü University, Malatya, Türkiye, 17-18 September, 2016." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Opinion Mining of Microblog Texts on Hadoop Ecosystem." 
                writers="M. Akif, Agca, Senol Atac, M. Mert Yucesan, Gokhan Y. Kucukayan, A. Murat Özbayoglu and Erdogan Dogdu."
                date="International Journal of Cloud Computing, vol 5, No:1-2, pp. 79-90." 
                link={OpinionMining} 
                pdflink={OpinionMiningPrev1} pdflink2={OpinionMiningPrev2} pdflink3={OpinionMiningPrev3} pdflink4={OpinionMiningPrev4}
                abstract="Opinion mining started getting more traction due to the increasing popularity of Twitter and similar social network platforms that are producing fast and real-time responses to social events. It is a very challenging area since it is difficult, if not impossible, to identify general public sentiment towards events, entities, etc., using opinion mining techniques over huge numbers of tweets and messages automatically. In this study we present our opinion mining techniques on tweet data with early results. We apply sentiment scoring and clustering algorithms using Hadoop ecosystem for parallel processing. We classify tweets by tagging them as positive, negative, and neutral as a result."
            />
            <Paper 
                name="Rastlantısal Su¨rec¸ ve Genetik Algoritmalar ile Algoritmik Kompozisyon." 
                writers="Özbayoğlu, A.M., Yavuz, M.H."
                date="International Conference on Mathematics and Mathematics Education (ICMME-2016), Fırat University, Elazığ, Turkey, 12-14 May, 2016." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="An ontology-based multi-agent virtual enterprise system (OMAVE): part 1: domain modelling and rule management" 
                writers="Bahram Lotfi Sadigh, Hakki Ozgur Unver, Shahrzad Nikghadam, Erdogan Dogdu, A. Murat Ozbayoglu and S. Engin Kilic"
                date="International Journal of Computer Integrated Manufacturing, 19 Feb 2016" 
                link={OntologyBased1} 
                pdflink={OntologyBased1Prev1} pdflink2={OntologyBased1Prev2} pdflink3={OntologyBased1Prev3} pdflink4={OntologyBased1Prev4}
                abstract="New advancements in computers and information technologies have yielded novel ideas to create more effective virtual
                collaboration platforms for multiple enterprises. Virtual enterprise (VE) is a collaboration model between multiple
                independent business partners in a value chain and is particularly suited to small and medium-sized enterprises (SMEs).
                The most challenging problem in implementing VE systems is ineffcient and inflexible data storage and management
                techniques for VE systems. In this research, an ontology-based multi-agent virtual enterprise (OMAVE) system is proposed
                to help SMEs shift from the classical trend of manufacturing part pieces to producing high-value-added, high-tech,
                innovative products. OMAVE targets improvement in the flexibility of VE business processes in order to enhance
                integration with available enterprise resource planning (ERP) systems. The architecture of OMAVE supports the requisite
                flexibility and enhances the reusability of the data and knowledge created in a VE system. In this article, a detailed
                description of system features along with the rule-based reasoning and decision support capabilities of OMAVE system are
                presented. To test and verify the functionality and operation of this system, a sample product was manufactured using
                OMAVE applications and tools with the contribution of three SMEs."
            />
            <Paper 
                name="Evaluation of Partner Companies based on Fuzzy Inference System for Establishing Virtual Enterprise Consortium" 
                writers="Nikghadam, S., B. Lotfi Sadigh, Ozbayoglu, A. M, Unver, H. O. and Kilic. S. E."
                date="Lecture Notes in Computer Science – CCIS Communications in Computer Science vol 577, pp. 104-115, 15 Dec 2015." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Estimation of the Number of Participants in Government Tenders with Computational Intelligence" 
                writers="Y.S. Demiray, A.M. Ozbayoglu, B.K.O. Tas"
                date="3rd Workshop on Social and Algorithmic Issues in Business Support (SAIBS), 2015, pp.433-437. 27-29 November. Poznan, Poland." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="A survey of partner selection methodologies for virtual enterprises and development of a goal programming–based approach" 
                writers="S. Nikghadam, B.Lotfi Sadigh, A.M. Özbayoğlu, H.Ö. Ünver and S. E. Kılıç"
                date="International Journal of Advanced Manufacturing Technology, pp. 1-22, 12 Nov 2015" 
                link={SurveyOfPartner} 
                pdflink={SurveyOfPartnerPrev1} pdflink2={SurveyOfPartnerPrev2} pdflink3={SurveyOfPartnerPrev3} pdflink4={SurveyOfPartnerPrev4}
                abstract="A virtual enterprise (VE) is a platform that enables
                dynamic collaboration among manufacturers and service providers with complementary capabilities in order to enhance
                their market competitiveness. The performance of a VE as a
                system depends highly on the performance of its partner enterprises. Hence, choosing an appropriate methodology for
                evaluating and selecting partners is a crucial step toward creating a successful VE. In this paper, we begin by presenting an
                extensive review of articles that address the VE partner selection problem. To fill a significant research gap, we develop a
                new goal programming (GP)–based approach that can be applied in extreme bidding conditions such as tight delivery
                timelines for large demand volumes. In this technique, fuzzy
                analytic hierarchy process (F-AHP) is used to determine customer preferences for four main criteria: proposed unit price,
                on-time delivery reliability, enterprises’ past performance, and
                service quality. These weights are then incorporated into the
                GP model to evaluate bidders based on customers’ preferences and goals. We present a case study in which we implement the F-AHP-GP technique and verify the model’s applicability, as it provides a more flexible platform for matching
                customers’ preferences."
            />
            <Paper 
                name="Clustering Quality Improvement of K-means Using a Hybrid Evolutionary Model" 
                writers="J. Karimov, M. Ozbayoglu"
                date="Procedia - Computer Sciences - Complex Adaptive Systems, Vol. 61, pp.38-45. 2-4 November. San Jose, CA, USA." 
                link={ClusteringQualityImp} 
                pdflink={ClusteringQualityImpPrev1} pdflink2={ClusteringQualityImpPrev2} pdflink3={ClusteringQualityImpPrev3} pdflink4={ClusteringQualityImpPrev4}
                abstract="Choosing good candidates for the initial centroid selection process for compact clustering algorithms, such as k-means, is essential
                for clustering quality and performance. In this study, a novel hybrid evolutionary model for k-means clustering (HE-kmeans) is
                proposed. This model uses meta-heuristic methods to identify the “good candidates” for initial centroid selection in k-means
                clustering method. The results indicate that the clustering quality is improved by approximately 30% compared to the standard
                random selection of initial centroids. We also experimentally compare our method with the other heuristics proposed for initial
                centroid selection and the experimental results show that our method performs better in most cases. "
            />
            <Paper 
                name="High quality clustering of big data and solving empty-clustering problem with an evolutionary hybrid algorithm" 
                writers="J. Karimov, M. Ozbayoglu"
                date="IEEE International Conference on Big Data, 2015, 29 October-1 November. Santa Clara, CA, USA." 
                link={HighQualityClust} 
                pdflink={HighQualityClustPrev1} pdflink2={HighQualityClustPrev2} pdflink3={HighQualityClustPrev3} pdflink4={HighQualityClustPrev4}
                abstract="Achieving high quality clustering is one of the
                most well-known problems in data mining. k-means is by far
                the most commonly used clustering algorithm. It converges
                fairly quickly, but achieving a good solution is not guaranteed.
                The clustering quality is highly dependent on the selection of
                the initial centroid selections. Moreover, when the number of
                clusters increases, it starts to suffer from ”empty clustering”.
                The motivation in this study is two-fold. We not only aim at
                improving the k-means clustering quality, but at the same time
                not being effected by the empty cluster issue. For achieving
                this purpose, we developed a hybrid model, H(EC)
                2S, Hybrid Evolutionary Clustering with Empty Clustering Solution.
                Firstly, it selects representative points to eliminate Empty
                Clustering problem. Then, the hybrid algorithm uses only
                these points during centroid selection. The proposed model
                combines Fireworks and Cuckoo-search based evolutionary
                algorithm with some centroid-calculation heuristics. The model
                is implemented using a Hadoop Mapreduce algorithm for
                achieving scalability when faced with a Big Data clustering
                problem. The advantages of the developed model is particularly
                attractive when the amount, dimensionality and number of
                cluster parameters tend to increase. The results indicate that
                considerable clustering quality performance improvement is
                achieved using the proposed model."
            />
            <Paper 
                name="Generic Menu Optimization for Multi-profile Customer Systems" 
                writers="J. Karimov, M. Ozbayoglu, E. Dogdu and B.Tavlı"
                date="IEEE International Symposium on Systems Engineering (ISSE) 2015, pp. 163-169. 28-30 September. Rome, Italy." 
                link={GenericMenuOpt} 
                pdflink={GenericMenuOptPrev1} pdflink2={GenericMenuOptPrev2} pdflink3={GenericMenuOptPrev3} pdflink4={GenericMenuOptPrev4}
                abstract="The use of optimal ATM menu structuring for
                different customer profiles is essential because of usability,
                efficiency, and customer satisfaction. Especially in competitive
                industries such as banking, having optimal user interface
                (UI) is a must. Determining the optimal menu structure is
                generally accomplished through manual adjustment of the
                menu elements. However, such an approach is inherently flawed
                due to the overwhelming size of the optimization variables’
                search space. Previous studies on menu optimization either
                are based on customer questionnaires or made for only a
                specific menu type using heuristic approaches (i.e., not generic).
                In this paper, we propose an systematic optimization method
                for menu structuring problem through a novel Mixed Integer
                Programming (MIP) framework. Our optimization approach is
                not specific to a predetermined menu class, on the contrary, the
                MIP model is designed to be a generic optimization framework
                that can be applied to a wide range of menu optimization
                problems. We evaluated the performance gains on a dataset of
                actual ATM usage logs for a period of 18 months consisting
                of 40 million transactions. We validated our results with both
                simulation application and mining of existing data logs. The
                results show that the proposed optimization approach provides
                significant reduction in the average transaction completion time
                and the overall click count."
            />
            <Paper 
                name="k-means Performance Improvements with Centroid Calculation Heuristics both for Serial and Parallel environments." 
                writers="Karimov, J., M. Ozbayoglu, and E. Dogdu."
                date="2015 IEEE Big Data Congress. 27 June-2 July. New York, USA." 
                link={CentroidCalc} 
                pdflink={CentroidCalcPrev1} pdflink2={CentroidCalcPrev2} pdflink3={CentroidCalcPrev3} pdflink4={CentroidCalcPrev4}
                abstract="k-means is the most widely used clustering algorithm due to its fairly straightforward implementations in
                various problems. Meanwhile, when the number of clusters
                increase, the number of iterations also tend to slightly increase.
                However there are still opportunities for improvement as some
                studies in the literature indicate. In this study, improved implementations of k-means algorithm with a centroid calculation
                heuristics which results in a performance improvement over
                traditional k-means are proposed. Two different versions of
                the algorithm for various data sizes are configured, one for
                small and the other one for big data implementations. Both
                the serial and MapReduce parallel implementations of the
                proposed algorithm are tested and analyzed using 2 different
                data sets with various number of clusters. The results show
                that big data implementation model outperforms the other
                compared methods after a certain threshold level and small
                data implementation performs better with increasing k value."
            />
            <Paper 
                name="Partner selection in formation of virtual enterprises using fuzzy logic." 
                writers="Nikghadam, S., B.Lotfi Sadigh, Ozbayoglu, A. M., H. O. Unver, and S. E. Kilic."
                date="International Conference on Operations Research and Enterprise Systems, ICORES 2015, 10-12 January 2015, Lisbon, Portugal, pp. 82– 88." 
                link={VirtualEnterprisesUsingFuzzyLogic} 
                pdflink={VirtualEnterprisesUsingFuzzyLogicPrev1} pdflink2={VirtualEnterprisesUsingFuzzyLogicPrev2} pdflink3={VirtualEnterprisesUsingFuzzyLogicPrev3} pdflink4={VirtualEnterprisesUsingFuzzyLogicPrev4}
                abstract="Virtual Enterprise (VE) is a temporary cooperation among independent enterprises to build up a dynamic
                collaboration framework for manufacturing. One of the most important steps to construct a successful VE is
                to select the most qualified partners to take role in the project. This paper is a survey of ranking the
                volunteer companies with respect to four evaluation criteria, proposed unit price, delivery time, quality and
                enterprises’ past performance. Fuzzy logic method is proposed to deal with these four conflicting criteria,
                considered as input variables of the model. As each criterion is different in nature with the other criterion,
                various membership functions are used to fuzzify the input values. The next step is to construct the logical
                fuzzy rules combining the inputs to conclude the output. Mamdani’s approach is adopted to evaluate the
                output in this Fuzzy Inference System. The result of the model is the partnership chance of each partner to
                participate in VE. A partner with highest partnership chance will be the winner of the negotiation.
                Implementation of this model to the illustrative example of a partner selection problem in virtual enterprise
                and comparing it with fuzzy-TOPSIS approach verifies the feasibility of the proposed approach and the
                computational results are satisfactory. "
            />
            <Paper 
                name="A new model to determine the two phase drilling Fluid Behaviors through Horizontal Eccentric Annular Geometry, Part A: Flow Pattern Identification and Liquid Holdup Estimation." 
                writers="Osgouei, R.E., Özbayoglu, E., Özbayoglu, M. and Yüksel, E."
                date="Energy Sources, Part A: Recovery, Utilization, and Environmental Effects, Volume 37, Issue 15, pp. 1663-1673" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="A new model to determine the two phase drilling Fluid Behaviors through Horizontal Eccentric Annular Geometry, Part B: Frictional Pressure Losses Estimation." 
                writers="Osgouei, R.E., Özbayoglu, E., Özbayoglu, M. and Yüksel. E."
                date="Energy Sources, Part A: Recovery, Utilization, and Environmental Effects, Volume 37, Issue 16, pp. 1756-1765" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Pressure drop estimation in horizontal annuli for liquid–gas 2 phase flow: Comparison of mechanistic models and computational intelligence techniques." 
                writers="Osgouei, Reza Ettehadi, Ozbayoglu, A. Murat, Ozbayoglu Evren M., Yuksel Ertan, Eresen, Aydin."
                date="Computers & Fluids 112, pp. 108-115" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Support Vector Regression and Computational Fluid Dynamics Modeling of Newtonian and Non-Newtonian Fluids in Annulus With Pipe Rotation." 
                writers="Sorgun, Mehmet, Ozbayoglu, A Murat, and Ozbayoglu M Evren."
                date="Journal of Energy Resources Technology 137.3, p. 032901." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Developing a Two Level Options Trading Strategy Based on Option Pair Optimization of Spread Strategies with Evolutionary Algorithms." 
                writers="Ucar, I., Ozbayoglu, M., and M. Ucar."
                date="IEEE Congress on Evolutionary Computation, CEC 2015. May 25-28. Sendai, Japan." 
                link={OptionPairOpt} 
                pdflink={OptionPairOptPrev1} pdflink2={OptionPairOptPrev2} pdflink3={OptionPairOptPrev3} pdflink4={OptionPairOptPrev4}
                abstract="In this study, a two level options trading strategy
                is modelled and optimized with Genetic Algorithms and Particle
                Swarm Optimization for profit maximization. In the first level,
                the trend is found and in the second level, options trading
                strategies for the particular trend are determined. The strike
                prices and expiration dates of the traded options are optimized
                and tested on 5 different Exchange Traded Funds (ETFs) (DIA,
                IWM, SPY, XLE, XLF). The performance of the proposed model
                is compared with Buy and Hold and commonly used technical
                analysis indicators and the results indicate using optimized
                options increased the overall profit with less drawdown risk."
            />
            <Paper 
                name="Finansal Islemler için Evrimsel Hesaplamalar yoluyla Egilimden Arındırılmıs Bagıl Güç Endeksi Göstergesi." 
                writers="Sahin, Ugur and Özbayoglu, A.Murat."
                date="MATDER, 14. Matematik Sempozyumu, 14-16 Mayıs, Nigde, Turkey." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Ontology-based Data Modelling and Decision Support in Smart Grid Applications." 
                writers="Dogdu, Erdogan, A. Murat Özbayoglu, Okan Benli, Hülya Erdener Akınç, Erdeniz Erol, Tugrul Atasoy, Ozan Gurec, and Özden Erçin."
                date="Proc. of the 2014 IEEE International Conference on Intelligent Energy and Power Systems. IEEE. June 2-6, 2014, Kyiv, Ukraine." 
                link={SmartGridApp} 
                pdflink={SmartGridAppPrev1} pdflink2={SmartGridAppPrev2} pdflink3={SmartGridAppPrev3} pdflink4={SmartGridAppPrev4}
                abstract="Conventional electricity distribution grids are
                getting smarter by coupling operation technologies with
                advanced information and communication technologies (ICT).
                This provides a better, reliable, cost effective and efficient service
                to the consumer while requiring an immense two way data
                transfer between consumer and distribution service operator
                (DSO). This paper gives a brief summary of the current situation
                of DSOs in Turkey after the privatization of the market and also
                the state of operational technologies (OT) in use. The integration
                of OT with ICT is the first step in building a smart grid, and the
                decision support systems (DSS) are becoming crucial in this
                integration and operational effectiveness. A major component in
                the smart grid integration efforts is a common information model
                as pointed out in earlier work. We restate the case of ontologies
                in information modeling towards building a smart grid and
                present the requirements for using ontologies in smart grid
                information systems and DSSs."
            />
            <Paper 
                name="Conceptualization of a Web-based Software Platform that enables Clean Production and Industrial Symbiosis." 
                writers="Gumus, Tuna, Hugi Christoph, Dirk Hengevoss, Engin Kılıç, Guillaume Massard, Özbayoglu, Murat, and Ozgur Unver."
                date="16th International Conference on Machine Design and Production, UMTIK 2014, Izmir, Turkey." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Why the Names? Anubanini and His Clan in the Cuthaean Legend." 
                writers="Selim F. Adalı, M. Fatih Demirci, A. Murat Özbayoglu and Oguz Ergin."
                date="Journal of the Ancient History and Cultures of the Eastern Mediterranean vol. 11, pp. 15–29." 
                link={WhyTheNames} 
                pdflink={WhyTheNamesPrev1} pdflink2={WhyTheNamesPrev2} pdflink3={WhyTheNamesPrev3} pdflink4={WhyTheNamesPrev4}
                abstract="This article is a study of the ancient Mesopotamian literary text known as the ‘Cuthaean
                Legend’. This Naram-Sin legend is known from several versions in the extant cuneiform corpus of
                texts (Westenholz 1997). The names of Anubanini and members of his clan, the main protagonists, have remained puzzling in several respects. The present contribution seeks to establish the
                reading of these names, making use of conventional cuneiform collation and analysis as well as digitial image processing. This is followed by an onomastic discussion of these names, relating them
                to aspects of Mesopotamian religion, literature, ethnnology, and demonology. "
            />
            <Paper 
                name="A Multi-agent System Model for Partner Selection Process in Virtual Enterprise." 
                writers="Sadigh, B Lotfi, F Arikan, Ozbayoglu, AM, HO Unver, and SE Kilic."
                date="Procedia Computer Science, Complex Adaptive Systems, CAS 2014. Vol. 36, pp. 367–372." 
                link={MultiAgentSystem} 
                pdflink={MultiAgentSystemPrev1} pdflink2={MultiAgentSystemPrev2} pdflink3={MultiAgentSystemPrev3} pdflink4={MultiAgentSystemPrev4}
                abstract="Virtual Enterprise (VE) is a collaboration model between multiple business partners in a value chain. VE information system deals
                with highly dynamic information from heterogeneous data sources. In order to manage and store dynamic VE information in the
                database, an ontology based VE model has been developed. To select winner enterprises in VE, a Multi Agent System (MAS) has
                been developed. Communication and data transition among agents and system entities are based on defined rules in VE ontology
                model. One of the most important contributions of agents in VE system is in partner selection step of VE formation phase. In this
                step several agents with different goals and strategies are collaborating and competing each other to win the negotiation procedure
                or maximize the profit for their assigned enterprise. Different strategies are developed for the agents depending on their appetite
                for winning the auction against maximizing the profit. Several simulations were run and the results are stored. These results are fed
                into a neural network in order to predict which enterprise will win the auction and what will be the profit margin. The motivation
                is to provide a forecasting agent for the customers about the outcomes of the auctions so that they can plan ahead and take the
                necessary action. Early results indicate such simulated multi-agent VE formations can be used in real systems."
            />
            <Paper 
                name="TN-RSI: Trend-normalized RSI Indicator for Stock Trading Systems with Evolutionary Computation." 
                writers="Sahin, Ugur and Ozbayoglu, A Murat."
                date="Procedia Computer Science, Complex Adaptive Systems, CAS 2014. Vol. 36, pp. 240–245." 
                link={RSIIndicator} 
                pdflink={RSIIndicatorPrev1} pdflink2={RSIIndicatorPrev2} pdflink3={RSIIndicatorPrev3} pdflink4={RSIIndicatorPrev4}
                abstract="RSI is a commonly used indicator preferred by stock traders. However, even though it works well when the market is trendless, during bull or bear
                market conditions (when there is a clear trend) its performance degrades. In this study, we developed a trading model using a modified RSI using
                trend-removed stock data. The model has several parameters including, the trend detection period, RSI buy-sell trigger levels and periods. These
                parameters are optimized using genetic algorithms; then the trading performance is compared against B&H and standard RSI indicator usage. 9
                different ETFs are selected for evaluating trading performance. The results indicate there is a performance improvement both in profit and success
                rates using this new model. As future work, other indicators might be modelled in a similar fashion in order to see if it is possible to find one
                indicator that can work under any market condition."
            />
            <Paper 
                name="Three phase flow characteristics in Inclined Eccentric Annuli." 
                writers="Osgouei, R.E., M.E. Özbayoglu, Özbayoglu, A.M, and T. Eren."
                date="2013 IADC/SPE Drilling Technology Conference and Exhibition (MEDT), Dubai, UAE." 
                link={ThreePhaseFlow} 
                pdflink={ThreePhaseFlowPrev1} pdflink2={ThreePhaseFlowPrev2} pdflink3={ThreePhaseFlowPrev3} pdflink4={ThreePhaseFlowPrev4}
                abstract="Gasified (aerated) fluids, having two-phases, are commonly used in drilling operations, especially for achieving underbalanced conditions. While adjusting the flow rates for each phase, common application is to adjust liquid phase for proper cuttings transport, and to adjust gas phase for controlling bottomhole pressure. Unfortunately, each of these phases flow with relatively different local velocities, causing various flow patterns to occur, which leads to fluctuations in hole cleaning performance as well as frictional pressure losses. These flow patterns are influenced by hole inclination, geometry, and presence of cuttings."
            />
            <Paper 
                name="Towards the Automated Autograph and the Recognition of Cuneiform Signs: Preliminary Results 2013. Law and (Dis)order in the Ancient Near East" 
                writers="Selim F., Adali, M. Fatih Demirci, A. Murat Özbayoglu, and Mustafa Uçar."
                date="59th Rencontre Assyriologique Internationale, July 15- 19, Ghent University" 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Comparison of Classifiers for Chatter Detection." 
                writers="Tugçi, R., B. Çelen, and Özbayoglu, A.M."
                date="IEEE Sinyal Isleme ve Iletisim Uygulamaları Konferansı (SIU 2013)." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="The Determination of Two Phase Liquid-Gas Flow Behavior Through Horizontal Eccentric Annular Geometry by Modification of Beggs & Brill and Lockhart & Martinelli Models." 
                writers="Osgouei, Reza Ettehadi, Mehmet Evren Ozbayoglu, Ozbayoglu, Murat, and Ertan H Yuksel."
                date="ASME 2013 Fluids Engineering Division Summer Meeting. American Society of Mechanical Engineers, V01CT17A008–V01CT17A008." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="A Two-Stage Water-Gas Shift Reactor Model To Obtain Desired Synthesis Gas Characteristics With Adjustable Reactor Parameters." 
                writers="AM Ozbayoglu, C Kasnakoglu, A Gungor, A Biyikoglu, and BZ Uysal."
                date="Journal of The Faculty of Engineering And Architecture of Gazi University 28.2, pp. 339-351." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Gas-Liquid Flow Through Horizontal Eccentric Annuli: CFD and Experiments Compared" 
                writers="Sorgun, Mehmet, Osgouei, Reza E, Ozbayoglu, M Evren and Ozbayoglu, A Murat."
                date="Energy Sources, Part A: Recovery, Utilization, and Environmental Effects 35.10, pp. 891-899." 
                link={GasLiquidFlow} 
                pdflink={GasLiquidFlowPrev1} pdflink2={GasLiquidFlowPrev2} pdflink3={GasLiquidFlowPrev3} pdflink4={GasLiquidFlowPrev4}
                abstract="Although flow of two-phase fluids is studied in detailed for
                pipes, there exists a lack of information about aerated fluid flow
                behavior inside a wellbore. This study aims to simulate gasliquid flow inside horizontal eccentric annulus using an
                Eulerian- Eulerian computational fluid dynamics (CFD) model
                for two-phase flow patterns i.e., dispersed bubble, dispersed
                annular, plug, slug, churn, wavy annular. To perform
                experiments using air-water mixtures for various in-situ air and
                water flow rates, a flow loop was constructed. A digital high
                speed camera is used for recording each test dynamically for
                identification of the liquid holdup and flow patterns. Results
                showed that CFD model predicts frictional pressure losses with
                an error less than 20% for all two-phase flow patterns when
                compared with experimental data."
            />
            <Paper 
                name="A Two-Level Cascade Evolutionary Computation Based Covered Call Trading Model." 
                writers="Ucar, Mustafa, Ilknur Bayram, and Ozbayoglu, A Murat."
                date="Procedia Computer Science, Complex Adaptive Systems Conference. ASME." 
                link={CoveredCall} 
                pdflink={CoveredCallPrev1} pdflink2={CoveredCallPrev2} pdflink3={CoveredCallPrev3} pdflink4={CoveredCallPrev4}
                abstract="In this study, a two-level cascade stock trading model is proposed. In the first level, the buy/sell signals are created by optimizing
                the RSI technical indicator parameters with evolutionary computation techniques. Then using the selected parameters, in the
                second level actual trading is performed using an optimized covered call strategy. Again, the optimization is implemented with
                evolutionary computation. In this particular study, genetic algorithms (GA) and Particle Swarm Optimization (PSO) are chosen
                as the soft computing methods for optimization. Historical end-of-day close values and options data for the S&P 500 Spider ETF
                (SPY) and 4 other ETFs (EWZ, XLE, IWM, XLF) between years 2005-2009 are used. The system is trained using the data
                between 2005 and 2008; the testing is done with 2009 data. The results indicate that the proposed model outperformed not only
                the buy and hold strategy, but also buying and selling the ETF alone without the options. In future work different stock/ETF data
                and different combined options strategies will be included in the model to identify performances of different techniques."
            />
            <Paper 
                name="Note and Timbre Classification by Local Features of Spectrogram." 
                writers="Guven, Erhan and Ozbayoglu, A Murat."
                date="Procedia Computer Science, Complex Adaptive Systems, CAS 2012. Vol. 12. Elsevier, pp. 182–187." 
                link={NoteAndTimbre} 
                pdflink={NoteAndTimbrePrev1} pdflink2={NoteAndTimbrePrev2} pdflink3={NoteAndTimbrePrev3} pdflink4={NoteAndTimbrePrev4}
                abstract="In recent years, very large scale online music databases containing more than 10 million tracks became prevalent as the fostered
                availability of streaming and downloading services via the World-Wide Web. The set of access schemes, or Music Information
                Retrieval (MIR), still poses several and partially solved problems, especially the personalization of the access, such as query by
                humming, melody, mood, style, genre, instrument, etc. Generally the previous approaches utilized the spectral features of the
                music track and extracted several high-level features such as pitch, cepstral coefficients, power, and the time-domain features
                such as onset, tempo, etc. In this work, however, the low-level local features of the spectrogram partitioned by means of the Bark
                scale are utilized to extract the quantized time-frequency-power features to be used by a Support Vector Machine to classify the
                notes (melody) and the timbre (instrument) of 128 instruments of General Midi standard. A database of 3-second sound clips of
                notes C4 to C5 on 7 sound cards using two software synthesizers is constructed and used for experimental note and timbre
                classification. The preliminary results of 13-category music note and 16-category timbre classifications are promising and their
                performance scores are surpassing the previously proposed methods."
            />
            <Paper 
                name="Estimation of the Burned Area in Forest Fires Using Computational Intelligence Techniques." 
                writers="Özbayoglu, A Murat and Recep Bozer."
                date="Procedia Computer Science, Complex Adaptive Systems, CAS 2012. Vol. 12, pp. 282–287." 
                link={BurnedAreainForestFires} 
                pdflink={BurnedAreainForestFiresPrev1} pdflink2={BurnedAreainForestFiresPrev2} pdflink3={BurnedAreainForestFiresPrev3} pdflink4={BurnedAreainForestFiresPrev4}
                abstract="Forest fires have environmental impacts that create economic problems as well as ecological damage. Developing a means to
                predict the possible size of a fire shortly after it first breaks out has the potential to guide proper resource allocation for improved
                fire control and was the main motivation of this research. In this study, the burned areas resulting from possible forest fires were
                estimated using historical forest fire records which contained parameters like geographical conditions of the existing
                environment, date and time when the fire broke out, meteorological data such as temperature, humidity and wind speed, and the
                type and number of trees in a unit area. The data was from the Department of Forestry in Turkey and contained 7,920 forest fire
                records from 2000 and 2009. The output from the estimation methods implemented in this work predicted the size of the area lost
                due to the fire and the corresponding fire size, i.e. big, medium, or small fire. Some of the estimation methods investigated were
                Multilayer Perceptron (MLP), Radial Basis Function Networks (RBFN), Support Vector Machines (SVM) and fuzzy logic. The
                results of these estimates are presented and compared to similar studies in literature."
            />
            <Paper 
                name="Comparison of Gross Calorific Value Estimation of Turkish Coals using Regression and Neural Networks Techniques." 
                writers="Ozbayoglu, A.Murat, M.Evren Ozbayoglu, and Gulhan Ozbayoglu."
                date="XXVIth International Mineral Processing Congress (IMPC 2012)." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="A parametric study on coal gasification for the production of syngas" 
                writers="Gungor, Afsin, Ozbayoglu, Murat, Kasnakoglu, Cosku, Biyikoglu, Atilla and Uysal, Bekir Zuhtu."
                date="Chemical Papers 66.7,pp. 677-683." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Analysis of gas–liquid behavior in eccentric horizontal annuli with image processing and artificial intelligence techniques." 
                writers="Ozbayoglu, A Murat and Yuksel, H Ertan."
                date="Journal of Petroleum Science and Engineering 81.1, pp. 31-40." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Hole Cleaning Performance of Gasified Drilling Fluids in Horizontal Well Sections." 
                writers="Ozbayoglu, Mehmet, Osgouei, Reza, Ozbayoglu, Murat, and Yuksel, Ertan."
                date="SPE Journal 17.3, pp. 912-923." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Regression Techniques and Neural Network for the Estimation of Gross Calorific Value of Turkish Coals." 
                writers="Ozbayoglu, A.Murat, M.Evren Ozbayoglu, and Gulhan Ozbayoglu."
                date="XIIth International Mineral Processing Symposium, September 24-27. New Delhi, India, pp. 1175–1180." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Estimation of Frictional Pressure Losses in Annulus with Pipe Rotation Using Neural Networks and Computational Fluid Dynamics." 
                writers="Sorgun, Mehmet, Ozbayoglu, Murat, and Evren Ozbayoglu."
                date="10th International Conference on Advances in Civil Engineering, ACE 2012, Ankara, Turkey." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Hierarchical rule-based neural network for multiobject classification using invariant features." 
                writers="Imamoglu, N, A Eresen, and Ozbayoglu, AM."
                date="Innovations in Intelligent Systems and Applications (INISTA), 2011 International Symposium on. IEEE, pp. 296–299." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Gas-Liquid Flow Through Horizontal Eccentric Annuli: CFD and Experiments Compared." 
                writers="Mehmet, Sorgun, Ozbayoglu, A.Murat, and Ozbayoglu M. Evren."
                date="ASME-JSME-KSME Joint Fluids Engineering Conference 2011." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Determination of Cuttings Transport Properties of Aerated Drilling Fluids." 
                writers="Özbayoglu, A.M., Osgouei R.E., M.E. Özbayoglu, and H.E. Yüksel."
                date="IPETGAS 2011, Ankara-Turkey." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Sinyal Gücüne Baglı Bina içi Konum Tespiti Modelleri Karsılastırılması." 
                writers="Özbayoglu, A.M and I.S Kök."
                date="Fırat Üniversitesi Elektrik-Elektronik Bilgisayar Sempozyumu (FEEB 2011), pp. 99– 104." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Determination of Air/Fuel and Steam/Fuel Ratio for Coal Gasification Process to Produce Synthesis Gas." 
                writers="A. Güngör, A.M Ozbayoglu, C. Kasnakoglu, A. Biyikoglu, and B.Z Uysal."
                date="Journal of Environmental Science and Engineering vol. 5.5, pp. 799–804, June 2011." 
                link={CoalGasification} 
                pdflink={CoalGasificationPrev1} pdflink2={CoalGasificationPrev2} pdflink3={CoalGasificationPrev3} pdflink4={CoalGasificationPrev4}
                abstract="In this study, a coal gasiﬁcation model is developed based on nine simultaneous reactions. For given gasiﬁcation temperature and pressure, the air/fuel and water vapor/fuel ratio are optimized for maximum Hz/CO ratio by parametric study. Furthermore, the cold gas efﬁciency and higher heating value of the synthesis gas produced are computed for each case. Optimum locations of investigated parameters are also searched for maximizing cold gas efﬁciency and higher heating value of the synthesis gas."
            />
            <Paper 
                name="Estimation of Multiphase Flow Properties using Computational Intelligence Models." 
                writers="Ozbayoglu, A Murat and H Ertan Yuksel."
                date="Procedia Computer Science, Complex Adaptive Systems, CAS 2011. Vol. 6, pp. 493–498." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
                abstract="Estimation of flow properties is essential in terms of the efficient usage of resources in drilling 
                operations. Meanwhile, hydraulic characteristics of liquid-gas flow is analyzed using experimental data obtained from 
                an eccentric pipe configuration. A high speed digital camera is used for recording the flow; in addition liquid holdup values are calculated using digital image processing techniques instead of empirical correlations or mechanistic measurements. At the same time through the acquired images, corresponding flow patterns are observed. Using the acquired images, estimation models are developed for air-water flow in horizontal eccentric annulus. This is conducted by using computational intelligence rather than conventional mechanistic models. The chosen models are nearest neighbor, backpropagation, decision trees and SVM. Input attributes are superficial Reynolds numbers for both liquid and gas phase. The output is the classified flow pattern and the liquid holdup value. SVM model turned out to be the best estimator for flow pattern identification process (%92.49 success rate for classifying 7 different flow patterns) whereas regression decision tree had the best performance for liquid holdup determination (RMSE of 0.0777)"
            />
            <Paper 
                name="Effect of Operation Parameters on Gasification For The Production of Synthesis Gas." 
                writers="Bıyıkoglu, Atilla, Afsin Güngör, Cosku Kasnakoglu, Özbayoglu, Murat, and Zühtü Uysal."
                date="27th Annual International Pittsburgh Coal Conference." 
                link={EffectofParameters} 
                pdflink={EffectofParametersPrev1} pdflink2={EffectofParametersPrev2} pdflink3={EffectofParametersPrev3} pdflink4={EffectofParametersPrev4}
                abstract="The sensitivity of operating parameters on the gasification of different Turkish coals was investigated for the production of synthesis gas. The coal properties were determined by detailed analysis in Turkish Coal Enterprises. The calculations and the analysis were carried out assuming the kinetic equilibrium model for gasification. The higher heating value of the synthesis gas produced was calculated for the evaluation of performance of the process. The effects of steam rate of water gas shift reactor, bypass ratio and coal composition on synthesis gas produced were analyzed. Moreover, integration of the gasifier with water-gas shift reactor was also investigated to obtain the desired H2/CO ratio using different coals. The model developed in this work can be used for choosing the proper set of operating parameters to produce the synthesis gas with the desired composition suitable for the purpose of its end use."
            />
            <Paper 
                name="Determination of Air/Fuel and Steam/Fuel ratio for Coal Gasification process to produce Synthesis Gas." 
                writers="Gungor, Afsin, Ozbayoglu, Murat, Cosku Kasnakoglu, Atilla Biyikoglu, and Bekir Zuhtu Uysal."
                date="2nd International Conference on Nuclear and Renewable Energy Sources." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Hole Cleaning Performance of Gasified Drilling Fluids in Horizontal Well Sections. Paper SPE 131378," 
                writers="Osgouei, R.E, M.E Ozbayoglu, Ozbayoglu, A.M, and E Yuksel."
                date="SPE International Oil and Gas Conference & Exhibition." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Flow pattern identification of gas-liquid flow through horizontal annular geometries. Paper SPE 129123," 
                writers="Osgouei, Reza Ettehadi, ME Ozbayoglu, Ozbayoglu, MA, and E Yuksel."
                date="SPE oil and gas conference and exhibition, Mumbai, India." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Regression Techniques and Neural Network for the Estimation of Gross Calorific Value of Turkish Coals." 
                writers="Özbayoglu, A.M., M.E. Özbayoglu, and G. Özbayoglu."
                date="XIIth International Mineral Processing Symposium, Cappadocia-Nevsehir, Turkey." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Determination of Coal Gasification parameters for the production of Synthesis Gas." 
                writers="Bıyıkoglu, Atilla, Cosku Kasnakoglu, Özbayoglu, A. Murat, Afsin Güngör, D.Ö Özgür, and B. Zühtü Uysal."
                date="9th National Chemical Engineering Congress (UKMK-9)." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Stock Market Technical Indicator Optimization by Genetic Algorithms." 
                writers="Ozbayoglu, A.Murat and Umur Erkut."
                date="Artificial Neural Networks for Engineering 2010 (ANNIE 2010). ASME Press, pp. 589–596." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="An Analysis of Water Gas-Shift Reactor Battery System for Synthesis Gas Refinement." 
                writers="Ozbayoglu, Murat, Cosku Kasnakoglu, Afsin Gungor, Atilla Biyikoglu, and Bekir Zuhtu Uysal."
                date="11th International Combustion Symposium." 
                link={WaterGasShiftReactor} 
                pdflink={WaterGasShiftReactorPrev1} pdflink2={WaterGasShiftReactorPrev2} pdflink3={WaterGasShiftReactorPrev3} pdflink4={WaterGasShiftReactorPrev4}
                abstract="In this study, a two-stage synthesis gas (SYNGAS) refinement process is modeled through the use of a water-gasshift (WGS) reactor battery system. The process is controlled by adjusting the mixing ratio via a bypass line between
                the inlet and exit streams of the WGS reactor battery system, and the amount of steam supply into each reactor. Steam
                requirements and the amount of synthesis gas passing through the bypass line are determined by satisfying the
                constraints of the ratio of hydrogen to carbon monoxide at the exit of the system. The characteristic behavior of the
                battery system is obtained depending on the synthesis gas composition. As a result, the structured model cannot only
                refine the synthesis gas composition, but also identify the proper process parameters for a given coal type."
            />
            <Paper 
                name="Estimation of very-difficult-to-identify data for hole cleaning, cuttings transport and pressure drop estimation in directional and horizontal drilling." 
                writers="Ozbayoglu, Mehmet Evren, Reza Ettehadi Osgouei, Ozbayoglu, Ahmet, Ertan Yuksel."
                date="IADC/SPE Asia Pacific Drilling Technology Conference and Exhibition. Society of Petroleum Engineers." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Performance Analysis of Moments in Invariant Object Classification." 
                writers="Imamoglu, N, A Eresen, A Yagcı, and Ozbayoglu, A.M."
                date="Intelligent Engineering Systems Through Artificial Neural Networks. ASME, pp. 447–454." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Determination of Cutting Concentration through Horizontal Annular Geometry by using Image Processing Techniques." 
                writers="M.E., Ozbayoglu, Ozbayoglu A.M., Osgouei R.E., and Yuksel E."
                date="IPETGAS 09, Ankara - Turkey." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Determination of Liquid Hold up through Horizontal Annular Geometry by using Image Processing Techniques." 
                writers="M.E., Ozbayoglu, Ozbayoglu A.M., Osgouei R.E., and Yuksel E."
                date="IPETGAS 09, Ankara-Turkey." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Estimating flow patterns and frictional pressure losses of two-phase fluids in horizontal wellbores using artificial neural networks." 
                writers="Ozbayoglu, EM and Ozbayoglu, MA."
                date="Petroleum Science and Technology 27.2, pp. 135-149." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Estimation of Hardgrove grindability index of Turkish coals by neural networks." 
                writers="Özbayoglu, Gülhan, Özbayoglu, A Murat, and Özbayoglu, M Evren."
                date="International Journal of Mineral Processing 85.4, pp. 93-100." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Comparison of Bayesian Estimation and Neural Network Model in Stock Market Trading." 
                writers="Ozbayoglu, A.M and I Bahadır."
                date="Intelligent Engineering Systems Through Artificial Neural Networks. ASME, pp. 581–586." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Hardgrove Grindability Index Estimation using Neural Networks" 
                writers="Özbayoglu, A.M. and G. Özbayoglu."
                date="International Mineral Processing Symposium (IMPS 2008). International Mineral Processing Symposium (IMPS 2008), Antalya, Turkey." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Neural network and genetic programming in pressure loss estimation in eccentric pipe flow." 
                writers="Ozbayoglu, A.Murat, Z Aydiner, C Kasnakoglu, and M.E. Ozbayoglu."
                date="Intelligent Engineering Systems Through Artificial Neural Networks. ASME, pp. 163–170." 
                link={PressureLossEstimation} 
                pdflink={PressureLossEstimationPrev1} pdflink2={PressureLossEstimationPrev2} pdflink3={PressureLossEstimationPrev3} pdflink4={PressureLossEstimationPrev4}
                abstract="Studies of fluid flow in annular pipes have been popular in the petroleum
                engineering research. Most of the work has concentrated on CFD
                (Computational Fluid Dynamics) simulations, analytical and empirical models.
                In this study a neural network and evolutionary programming approach is
                developed to model the behavior of fluid flow in eccentric pipes. The model
                uses the fluid rheological parameters, density, mass flow rate, eccentricity, inner
                and outer pipe diameters, and predicts the pressure drop (ΔP) in the pipe in the
                flow direction. The evolutionary programming model uses basic mathematical
                operators, logarithm and sine functions. The results are compared with some
                experimental data obtained in literature and some Matlab CFD simulations.
                Preliminary studies indicate the neural network model performed better than the
                other models, evolutionary programming model can predict comparable pressure
                drop results, but not as effectively as the other models."
            />
            <Paper 
                name="Neural based Technical Analysis in Stock Market Forecasting." 
                writers="Ozbayoglu, A.Murat."
                date="Intelligent Engineering Systems Through Artificial Neural Networks. ASME, pp. 261–266." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Using Neural Networks For Flow Pattern And Frictional Loss Estimation For Aerated Drilling Fluids." 
                writers="Ozbayoglu, AM, ME Ozbayoglu"
                date="Canadian International Petroleum Conference. Petroleum Society of Canada." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Flow pattern and frictional-pressure-loss estimation using neural networks for UBD operations." 
                writers="Ozbayoglu, M.Evren and Ozbayoglu, A.Murat."
                date="IADC/SPE Managed Pressure Drilling & Underbalanced Operations." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Akıllı aracıların e-saglıkta kullanımı: Hastalık teshis modelleri." 
                writers="Özbayoglu, A.M."
                date="2. E-Saglık Çalıstayı." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="CS0: TOBB ETÜ’de Bilgisayar Mühendisligine Giris Dersi." 
                writers="Erten, Murat, Özbayoglu, Murat, and Bülent Tavlı."
                date="Akademik Bilisim 2007." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Yapay Sinir Agları kullanarak hazırlanan bir Hisse senedi deger tahmini uygulaması." 
                writers="Özbayoglu, A.M."
                date="TOK 06, Otomatik Kontrol Ulusal Toplantısı, pp. 149–152." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Estimation of Foam Stability Properties Using Image Processing and Artificial Neural Networks." 
                writers="Strauss, H, Ozbayoglu, A.M, and M.E Ozbayoglu."
                date="5th North American Conference on Multiphase Technology." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Yönsel Bant geçiren filtre ve yapay sinir agları yardımıyla otomatik parmak izi sınıflandırma ve tanıma islemi." 
                writers="Özbayoglu, A.M."
                date="II. Polis Bilisim Sempozyumu, pp. 234–237." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Unsupervised hierarchical fingerprint matching." 
                writers="Murat Ozbayoglu, A and CH Dagli."
                date="Neural Networks, 1997., International Conference on. Vol. 3. IEEE, pp. 1439–1442." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Hierarchical fingerprint identification based on an unsupervised neural network model." 
                writers="Ozbayoglu, Ahmet Murat."
                date="PhD thesis. Engineering Management Dept, University of Missouri-Rolla." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="An Application to Speaker Identification Using SimNet." 
                writers="Enke, D, HC Lee, Ozbayoglu, AM, A Thammano, and CH Dagli."
                date="Intelligence Engineering Systems Through Artificial Neural Networks. Vol. 5." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="SimNet: Sınıflandırma uygulamaları için bir yapay sinir agı." 
                writers="Özbayoglu, A.M, H.C Lee, C.H Daglı, F Erçal, and D. Enke."
                date="XVIIth National Conference on Operational Research and Industrial Engineering Conference." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="SimNet: A Parallel Neuro-Fuzzy Paradigm for Data Clustering." 
                writers="Lee, HC, CH Dagli, F Ercal, and Ozbayoglu, AM."
                date="OAI Neural Networks Symposium and Workshop (OAINN’95)." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Ögütme Devresinin Yapay Sinir Agları ile Modellenmesi." 
                writers="Sönmezer, O, G Özbayoglu, Ü Atalay, Özbayoglu, M, and C. Daglı."
                date="Madencilikte Bilgisayar Uygulamaları Sempozyumu, pp. 211–217." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Automated visual inspection system based on Hausdorff-Vioronoi network (HAVNET) architecture." 
                writers="Burkett, K, Ozbayoglu, MA, and CH Dagli."
                date="Proceedings-SPIE The International Society For Optical Engineering, pp. 2344–2347." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Automated visual inspection system based on HAVNET architecture." 
                writers="Burkett, K, Ozbayoglu, Murat A, and Cihan H Dagli."
                date="Photonics for Industrial Applications. International Society for Optics and Photonics, pp. 361–371." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="A hierarchial neural network implementation for forecasting." 
                writers="Ozbayoglu, MA, CH Dagli, and B Fulkerson."
                date="Neural Networks, 1994. IEEE World Congress on Computational Intelligence., 1994 IEEE International Conference on. Vol. 5, pp. 3184–3189." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />
            <Paper 
                name="Autonomous parts assembly: comparison of ART and neocognitron." 
                writers="Rosandich, Ryan G, Ozbayoglu, Murat A, Eric W Roddiger, and Cihan H Dagli."
                date="Optical Engineering and Photonics in Aerospace Sensing. International Society for Optics and Photonics, pp. 480–490." 
                link={Pdf} 
                pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}
            />

            
        </section>
    );
}

export default Publications;