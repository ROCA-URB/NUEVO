var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRITopo_1 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_ZPN04_VIALIDADES_2 = new ol.format.GeoJSON();
var features_ZPN04_VIALIDADES_2 = format_ZPN04_VIALIDADES_2.readFeatures(json_ZPN04_VIALIDADES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZPN04_VIALIDADES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZPN04_VIALIDADES_2.addFeatures(features_ZPN04_VIALIDADES_2);
var lyr_ZPN04_VIALIDADES_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZPN04_VIALIDADES_2, 
                style: style_ZPN04_VIALIDADES_2,
                popuplayertitle: 'ZPN04_VIALIDADES',
                interactive: false,
    title: 'ZPN04_VIALIDADES<br />\
    <img src="styles/legend/ZPN04_VIALIDADES_2_0.png" /> VC-1<br />\
    <img src="styles/legend/ZPN04_VIALIDADES_2_1.png" /> VC-12<br />\
    <img src="styles/legend/ZPN04_VIALIDADES_2_2.png" /> VC-2<br />\
    <img src="styles/legend/ZPN04_VIALIDADES_2_3.png" /> VC-3<br />\
    <img src="styles/legend/ZPN04_VIALIDADES_2_4.png" /> VC-6<br />\
    <img src="styles/legend/ZPN04_VIALIDADES_2_5.png" /> VC-7<br />\
    <img src="styles/legend/ZPN04_VIALIDADES_2_6.png" /> VCm-1<br />\
    <img src="styles/legend/ZPN04_VIALIDADES_2_7.png" /> VCm-14<br />\
    <img src="styles/legend/ZPN04_VIALIDADES_2_8.png" /> VCm-15<br />\
    <img src="styles/legend/ZPN04_VIALIDADES_2_9.png" /> VCm-16<br />\
    <img src="styles/legend/ZPN04_VIALIDADES_2_10.png" /> VCm-2<br />\
    <img src="styles/legend/ZPN04_VIALIDADES_2_11.png" /> VCm-3<br />\
    <img src="styles/legend/ZPN04_VIALIDADES_2_12.png" /> VCm-4<br />\
    <img src="styles/legend/ZPN04_VIALIDADES_2_13.png" /> VP-1<br />\
    <img src="styles/legend/ZPN04_VIALIDADES_2_14.png" /> VP-2<br />\
    <img src="styles/legend/ZPN04_VIALIDADES_2_15.png" /> VP-3<br />\
    <img src="styles/legend/ZPN04_VIALIDADES_2_16.png" /> VR-1<br />\
    <img src="styles/legend/ZPN04_VIALIDADES_2_17.png" /> VR-3<br />\
    <img src="styles/legend/ZPN04_VIALIDADES_2_18.png" /> VSC-1<br />\
    <img src="styles/legend/ZPN04_VIALIDADES_2_19.png" /> VSC-2<br />\
    <img src="styles/legend/ZPN04_VIALIDADES_2_20.png" /> <br />' });
var format_ZPN04_USO_DE_SUELO_3 = new ol.format.GeoJSON();
var features_ZPN04_USO_DE_SUELO_3 = format_ZPN04_USO_DE_SUELO_3.readFeatures(json_ZPN04_USO_DE_SUELO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZPN04_USO_DE_SUELO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZPN04_USO_DE_SUELO_3.addFeatures(features_ZPN04_USO_DE_SUELO_3);
var lyr_ZPN04_USO_DE_SUELO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZPN04_USO_DE_SUELO_3, 
                style: style_ZPN04_USO_DE_SUELO_3,
                popuplayertitle: 'ZPN04_USO_DE_SUELO',
                interactive: false,
    title: 'ZPN04_USO_DE_SUELO<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_0.png" /> AG<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_1.png" /> AL<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_2.png" /> B<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_3.png" /> CB<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_4.png" /> CC<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_5.png" /> CD<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_6.png" /> CR<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_7.png" /> CS<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_8.png" /> CV<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_9.png" /> EI-B<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_10.png" /> EI-C<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_11.png" /> EI-D<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_12.png" /> EI-R<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_13.png" /> EI-V<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_14.png" /> EV-B<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_15.png" /> EV-C<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_16.png" /> EV-D<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_17.png" /> EV-V<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_18.png" /> GH<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_19.png" /> H1<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_20.png" /> H2<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_21.png" /> H2-U<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_22.png" /> H3<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_23.png" /> H4<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_24.png" /> I1<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_25.png" /> I2<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_26.png" /> I3<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_27.png" /> IE-U<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_28.png" /> IN<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_29.png" /> IN-U<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_30.png" /> MB<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_31.png" /> MB4<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_32.png" /> MC<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_33.png" /> MD<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_34.png" /> MFM<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_35.png" /> SB<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_36.png" /> SC<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_37.png" /> SD<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_38.png" /> SI<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_39.png" /> SR<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_40.png" /> SV<br />\
    <img src="styles/legend/ZPN04_USO_DE_SUELO_3_41.png" /> TH<br />' });
var format_ZPN04_MANZANAS1_4 = new ol.format.GeoJSON();
var features_ZPN04_MANZANAS1_4 = format_ZPN04_MANZANAS1_4.readFeatures(json_ZPN04_MANZANAS1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZPN04_MANZANAS1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZPN04_MANZANAS1_4.addFeatures(features_ZPN04_MANZANAS1_4);
var lyr_ZPN04_MANZANAS1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZPN04_MANZANAS1_4, 
                style: style_ZPN04_MANZANAS1_4,
                popuplayertitle: 'ZPN04_MANZANAS1',
                interactive: false,
                title: '<img src="styles/legend/ZPN04_MANZANAS1_4.png" /> ZPN04_MANZANAS1'
            });
var format_limitezapopan2012_5 = new ol.format.GeoJSON();
var features_limitezapopan2012_5 = format_limitezapopan2012_5.readFeatures(json_limitezapopan2012_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limitezapopan2012_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limitezapopan2012_5.addFeatures(features_limitezapopan2012_5);
var lyr_limitezapopan2012_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limitezapopan2012_5, 
                style: style_limitezapopan2012_5,
                popuplayertitle: 'limite zapopan 2012',
                interactive: true,
                title: '<img src="styles/legend/limitezapopan2012_5.png" /> limite zapopan 2012'
            });
var group_Lmites = new ol.layer.Group({
                                layers: [lyr_ZPN04_MANZANAS1_4,lyr_limitezapopan2012_5,],
                                fold: "open",
                                title: 'Límites'});
var group_Usos = new ol.layer.Group({
                                layers: [lyr_ZPN04_USO_DE_SUELO_3,],
                                fold: "open",
                                title: 'Usos'});
var group_Vialidades = new ol.layer.Group({
                                layers: [lyr_ZPN04_VIALIDADES_2,],
                                fold: "open",
                                title: 'Vialidades'});
var group_BaseMap = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_ESRITopo_1,],
                                fold: "open",
                                title: 'BaseMap'});

lyr_GoogleSatellite_0.setVisible(true);lyr_ESRITopo_1.setVisible(true);lyr_ZPN04_VIALIDADES_2.setVisible(true);lyr_ZPN04_USO_DE_SUELO_3.setVisible(true);lyr_ZPN04_MANZANAS1_4.setVisible(true);lyr_limitezapopan2012_5.setVisible(true);
var layersList = [group_BaseMap,group_Vialidades,group_Usos,group_Lmites];
lyr_ZPN04_VIALIDADES_2.set('fieldAliases', {'DIS_SUB': 'DIS_SUB', 'JERAR_VIAL': 'JERAR_VIAL', 'CLAV_VIAL': 'CLAV_VIAL', 'ESTADO': 'ESTADO', 'NOMB_VIAL': 'NOMB_VIAL', 'DER_VIA': 'DER_VIA', 'ANCHO_BANQ': 'ANCHO_BANQ', 'CARRIL_EST': 'CARRIL_EST', 'CARRIL_TRA': 'CARRIL_TRA', 'CARRIL_CIR': 'CARRIL_CIR', 'CARRIL_CIC': 'CARRIL_CIC', 'SENTI_VIAL': 'SENTI_VIAL', 'TIPO_PAVIM': 'TIPO_PAVIM', 'RI': 'RI', });
lyr_ZPN04_USO_DE_SUELO_3.set('fieldAliases', {'CLAVE_CAT': 'CLAVE_CAT', 'Nivel': 'Nivel', 'GENERICO': 'GENERICO', 'NIVEL_SER': 'NIVEL_SER', 'HOMO_USO': 'HOMO_USO', 'GIRO': 'GIRO', 'NOM_GIRO': 'NOM_GIRO', 'Superficie': 'Superficie', });
lyr_ZPN04_MANZANAS1_4.set('fieldAliases', {'Id': 'Id', 'ORIG_FID': 'ORIG_FID', });
lyr_limitezapopan2012_5.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CVEGEO': 'CVEGEO', 'REGION': 'REGION', 'AREAkm2': 'AREAkm2', 'CVE': 'CVE', 'Id_Jal': 'Id_Jal', });
lyr_ZPN04_VIALIDADES_2.set('fieldImages', {'DIS_SUB': 'TextEdit', 'JERAR_VIAL': 'TextEdit', 'CLAV_VIAL': 'TextEdit', 'ESTADO': 'TextEdit', 'NOMB_VIAL': 'TextEdit', 'DER_VIA': 'TextEdit', 'ANCHO_BANQ': 'TextEdit', 'CARRIL_EST': 'TextEdit', 'CARRIL_TRA': 'TextEdit', 'CARRIL_CIR': 'TextEdit', 'CARRIL_CIC': 'TextEdit', 'SENTI_VIAL': 'TextEdit', 'TIPO_PAVIM': 'TextEdit', 'RI': 'TextEdit', });
lyr_ZPN04_USO_DE_SUELO_3.set('fieldImages', {'CLAVE_CAT': 'TextEdit', 'Nivel': 'TextEdit', 'GENERICO': 'TextEdit', 'NIVEL_SER': 'TextEdit', 'HOMO_USO': 'TextEdit', 'GIRO': 'TextEdit', 'NOM_GIRO': 'TextEdit', 'Superficie': 'TextEdit', });
lyr_ZPN04_MANZANAS1_4.set('fieldImages', {'Id': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_limitezapopan2012_5.set('fieldImages', {'NOMBRE': 'TextEdit', 'CVEGEO': 'TextEdit', 'REGION': 'TextEdit', 'AREAkm2': 'TextEdit', 'CVE': 'TextEdit', 'Id_Jal': 'TextEdit', });
lyr_ZPN04_VIALIDADES_2.set('fieldLabels', {'DIS_SUB': 'no label', 'JERAR_VIAL': 'no label', 'CLAV_VIAL': 'no label', 'ESTADO': 'no label', 'NOMB_VIAL': 'no label', 'DER_VIA': 'no label', 'ANCHO_BANQ': 'no label', 'CARRIL_EST': 'no label', 'CARRIL_TRA': 'no label', 'CARRIL_CIR': 'no label', 'CARRIL_CIC': 'no label', 'SENTI_VIAL': 'no label', 'TIPO_PAVIM': 'no label', 'RI': 'no label', });
lyr_ZPN04_USO_DE_SUELO_3.set('fieldLabels', {'CLAVE_CAT': 'no label', 'Nivel': 'no label', 'GENERICO': 'no label', 'NIVEL_SER': 'no label', 'HOMO_USO': 'no label', 'GIRO': 'no label', 'NOM_GIRO': 'no label', 'Superficie': 'no label', });
lyr_ZPN04_MANZANAS1_4.set('fieldLabels', {'Id': 'no label', 'ORIG_FID': 'no label', });
lyr_limitezapopan2012_5.set('fieldLabels', {'NOMBRE': 'no label', 'CVEGEO': 'no label', 'REGION': 'no label', 'AREAkm2': 'no label', 'CVE': 'no label', 'Id_Jal': 'no label', });
lyr_limitezapopan2012_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});