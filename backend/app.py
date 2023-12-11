from flask import Flask, request, jsonify
from flask_cors import CORS  # Esto es para manejar problemas de CORS
import firebase_admin
from firebase_admin import credentials, firestore

# Configurar Firebase
cred = credentials.Certificate("backend/paraFireBase/credencialFireBase.json")  # Reemplaza con la ruta de tu archivo de credenciales
firebase_admin.initialize_app(cred)
db = firestore.client()

# Inicializar Flask
app = Flask(__name__)
CORS(app)  # Habilitar CORS para permitir solicitudes desde cualquier origen

# Ruta para obtener todos los productos
@app.route('/productos', methods=['GET'])
def get_productos():
    productos = db.collection('producto').get()
    # productos_list = [doc.to_dict() for doc in productos]
    productos_list = [{"doc_id": doc.id, **doc.to_dict()} for doc in productos]

    return jsonify(productos_list)

# Ruta para agregar un nuevo producto
@app.route('/producto/add', methods=['POST'])
def add_producto():
    nuevo_producto = request.get_json()
    db.collection('producto').add(nuevo_producto)
    return jsonify({"message": "Producto agregado correctamente"}), 201

# Ruta para eliminar un producto por ID
@app.route('/producto/<producto_id>', methods=['DELETE'])
def delete_producto(producto_id):
    db.collection('producto').document(producto_id).delete()
    return jsonify({"message": "Producto eliminado correctamente"}), 200



# Ruta para obtener un producto por ID
@app.route('/producto/<producto_id>', methods=['GET'])
def get_producto_by_id(producto_id):
    producto = db.collection('producto').document(producto_id).get()
    
    if producto.exists:
        return jsonify(producto.to_dict())
    else:
        return jsonify({"error": "Producto no encontrado"}), 404
    


# Ruta para obtener un producto por nombre
@app.route('/producto/nombre/<nombre_producto>', methods=['GET'])
def get_producto_by_nombre(nombre_producto):
    productos = db.collection('producto').where('nombre', '==', nombre_producto).get()
    
    if productos:
        productos_list = [doc.to_dict() for doc in productos]
        return jsonify(productos_list)
    else:
        return jsonify({"error": "Producto no encontrado"}), 404


# Ruta para actualizar un producto por nombre
@app.route('/producto/nombre/<nombre_producto>', methods=['PUT'])
def update_producto_by_nombre(nombre_producto):
    productos = db.collection('producto').where('nombre', '==', nombre_producto).get()
    
    if productos:
        for producto in productos:
            producto.reference.update(request.get_json())
        return jsonify({"message": "Producto actualizado correctamente"}), 200
    else:
        return jsonify({"error": "Producto no encontrado"}), 404

if __name__ == '__main__':
    app.run(debug=True)