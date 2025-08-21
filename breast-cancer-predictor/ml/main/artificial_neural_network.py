import pickle
import sklearn
import pandas as pd

def process_data(data):
    df = pd.DataFrame([data])
    # Rename columns to match the training feature names
    df.rename(columns={
        'clump_thickness': 'Clump Thickness',
        'cell_size_uniformity': 'Uniformity of Cell Size',
        'cell_shape_uniformity': 'Uniformity of Cell Shape',
        'marginal_adhesion': 'Marginal Adhesion',
        'epithelial_cell_size': 'Single Epithelial Cell Size',
        'bare_nuclei': 'Bare Nuclei',
        'bland_chromatin': 'Bland Chromatin',
        'normal_nucleoli': 'Normal Nucleoli',
        'mitoses': 'Mitoses'
    }, inplace=True)

    file_name = '../ML_models/ann_model.pkl'
    loaded_model = pickle.load(open(file_name, 'rb'))
    
    y_pred = loaded_model.predict(df)
    
    return y_pred
