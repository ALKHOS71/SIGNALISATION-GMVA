var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SDv2SIGNALISATIONGMVA_1 = new ol.format.GeoJSON();
var features_SDv2SIGNALISATIONGMVA_1 = format_SDv2SIGNALISATIONGMVA_1.readFeatures(json_SDv2SIGNALISATIONGMVA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDv2SIGNALISATIONGMVA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDv2SIGNALISATIONGMVA_1.addFeatures(features_SDv2SIGNALISATIONGMVA_1);
var lyr_SDv2SIGNALISATIONGMVA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SDv2SIGNALISATIONGMVA_1, 
                style: style_SDv2SIGNALISATIONGMVA_1,
                interactive: true,
                title: '<img src="styles/legend/SDv2SIGNALISATIONGMVA_1.png" /> SDv2 SIGNALISATION GMVA'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SDv2SIGNALISATIONGMVA_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SDv2SIGNALISATIONGMVA_1];
lyr_SDv2SIGNALISATIONGMVA_1.set('fieldAliases', {'Satut_Pann': 'Satut_Pann', 'N_Photo': 'N_Photo', 'Commune': 'Commune', 'Type_Voie': 'Type_Voie', 'Voie': 'Voie', 'Carrefour': 'Carrefour', 'Lame': 'Lame', 'N_Mention': 'N_Mention', 'Thématiqu': 'Thématiqu', 'Site_signa': 'Site_signa', 'SCHEMA_DIR': 'SCHEMA_DIR', 'Site_valid': 'Site_valid', 'Phasage_pr': 'Phasage_pr', 'Site_val_1': 'Site_val_1', 'Niveau_de_': 'Niveau_de_', 'CAS_DE_FIG': 'CAS_DE_FIG', 'Commune_du': 'Commune_du', 'Catégorie': 'Catégorie', 'Mention': 'Mention', 'Idéogramm': 'Idéogramm', 'Idéogra_1': 'Idéogra_1', 'Sens_Flèc': 'Sens_Flèc', 'Type_panne': 'Type_panne', 'Type_mat': 'Type_mat', 'Etat': 'Etat', 'Conformit�': 'Conformit�', 'Remarque': 'Remarque', 'Bilinguism': 'Bilinguism', 'Coût_pann': 'Coût_pann', 'Coût_pose': 'Coût_pose', 'Coût_mât': 'Coût_mât', 'Coût_po_1': 'Coût_po_1', 'Coût_dép': 'Coût_dép', 'Coût_d�_1': 'Coût_d�_1', 'TOTAL': 'TOTAL', 'Coût_Four': 'Coût_Four', 'Coût_Po_2': 'Coût_Po_2', 'Coût_D�_2': 'Coût_D�_2', 'Id_mat_2': 'Id_mat_2', });
lyr_SDv2SIGNALISATIONGMVA_1.set('fieldImages', {'Satut_Pann': 'TextEdit', 'N_Photo': 'TextEdit', 'Commune': 'TextEdit', 'Type_Voie': 'TextEdit', 'Voie': 'TextEdit', 'Carrefour': 'TextEdit', 'Lame': 'TextEdit', 'N_Mention': 'TextEdit', 'Thématiqu': 'TextEdit', 'Site_signa': 'TextEdit', 'SCHEMA_DIR': 'TextEdit', 'Site_valid': 'TextEdit', 'Phasage_pr': 'TextEdit', 'Site_val_1': 'TextEdit', 'Niveau_de_': 'TextEdit', 'CAS_DE_FIG': 'TextEdit', 'Commune_du': 'TextEdit', 'Catégorie': 'TextEdit', 'Mention': 'TextEdit', 'Idéogramm': 'TextEdit', 'Idéogra_1': 'TextEdit', 'Sens_Flèc': 'TextEdit', 'Type_panne': 'TextEdit', 'Type_mat': 'TextEdit', 'Etat': 'TextEdit', 'Conformit�': 'TextEdit', 'Remarque': 'TextEdit', 'Bilinguism': 'TextEdit', 'Coût_pann': 'TextEdit', 'Coût_pose': 'TextEdit', 'Coût_mât': 'TextEdit', 'Coût_po_1': 'TextEdit', 'Coût_dép': 'TextEdit', 'Coût_d�_1': 'TextEdit', 'TOTAL': 'TextEdit', 'Coût_Four': 'TextEdit', 'Coût_Po_2': 'TextEdit', 'Coût_D�_2': 'TextEdit', 'Id_mat_2': 'TextEdit', });
lyr_SDv2SIGNALISATIONGMVA_1.set('fieldLabels', {'Satut_Pann': 'header label', 'N_Photo': 'header label', 'Commune': 'header label', 'Type_Voie': 'header label', 'Voie': 'header label', 'Carrefour': 'header label', 'Lame': 'header label', 'N_Mention': 'header label', 'Thématiqu': 'header label', 'Site_signa': 'header label', 'SCHEMA_DIR': 'header label', 'Site_valid': 'header label', 'Phasage_pr': 'header label', 'Site_val_1': 'header label', 'Niveau_de_': 'header label', 'CAS_DE_FIG': 'header label', 'Commune_du': 'header label', 'Catégorie': 'header label', 'Mention': 'header label', 'Idéogramm': 'header label', 'Idéogra_1': 'header label', 'Sens_Flèc': 'header label', 'Type_panne': 'header label', 'Type_mat': 'header label', 'Etat': 'header label', 'Conformit�': 'header label', 'Remarque': 'header label', 'Bilinguism': 'header label', 'Coût_pann': 'header label', 'Coût_pose': 'header label', 'Coût_mât': 'header label', 'Coût_po_1': 'header label', 'Coût_dép': 'header label', 'Coût_d�_1': 'header label', 'TOTAL': 'header label', 'Coût_Four': 'inline label', 'Coût_Po_2': 'header label', 'Coût_D�_2': 'header label', 'Id_mat_2': 'header label', });
lyr_SDv2SIGNALISATIONGMVA_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});