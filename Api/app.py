# Comando para importar el modulo Flask de Python
from flask import Flask, jsonify, request

# Iniciar flask
app = Flask(__name__)

# Se importa la lista de datos del archivo products.py
from products import products

# Rutas de Datos Get
@app.route('/products')
# Esta funciona retorna todos los productos en formato JSON
def getProducts():
    # return jsonify(products)
    return jsonify({'products': products})

#Esta ruta sirve para que se obtenga un producto en especifico, luego de /products se coloca otro / y el nombre del producto que se quiera traer
@app.route('/products/<string:product_name>')
def getProduct(product_name):
    # Recorre la lista de productos y compara cada producto para luego imprimir el producto que se pidio
    productsFound = [
        product for product in products if product['name'] == product_name.lower()]
    if (len(productsFound) > 0):
        # Retorna solamente el primer valor encontrado
        return jsonify({'product': productsFound[0]})
    # Retorna un mensaje si no existe el producto que se haya buscado
    return jsonify({'message': 'Product Not found'})

# Ruta de Crear Datos
@app.route('/products', methods=['POST'])
# Esta funcion se usa para crear un nuevo producto
def addProduct():
    # Esta variable guarda los valores del nuevo producto que se agregó
    new_product = {
        'name': request.json['name'],
        'price': request.json['price'],
        'quantity': 10
    }
    # Agrega en nuevo producto a la lista del archivo products.py
    products.append(new_product)
    return jsonify({'products': products})

# Ruta para actualizar los datos
# luego del /products se agrega el nombre del producto que se quiera actualizar
@app.route('/products/<string:product_name>', methods=['PUT'])
# Esta funcion recibe el nombre del producto para actualizar
def editProduct(product_name):
    # esta variable busca y compara un producto que el nombre y el product_name sea igual
    productsFound = [product for product in products if product['name'] == product_name]
    # si el producto es encontrado se va a actualizar los parametros
    if (len(productsFound) > 0):
        # Editar el nombre
        productsFound[0]['name'] = request.json['name']
        # Editar el precio del producto
        productsFound[0]['price'] = request.json['price']
        # Editar la cantidad del producto
        productsFound[0]['quantity'] = request.json['quantity']
        # Retorna el producto actuallizado y un mensaje de producto actualizado
        return jsonify({
            'message': 'Product Updated',
            'product': productsFound[0]
        })
    # Si no se encuentra el producto buscado, retorna producto no encontrado
    return jsonify({'message': 'Product Not found'})

# DELETE Data Route
@app.route('/products/<string:product_name>', methods=['DELETE'])
# Esta funcion recibe el nombre del producto para eliminar de la lista
def deleteProduct(product_name):
    # esta variable busca y compara un producto que el nombre y el product_name sea igual para eliminarlo
    productsFound = [product for product in products if product['name'] == product_name]
    if len(productsFound) > 0:
        # elimina solamente el primer producto encontrado
        products.remove(productsFound[0])
        # Retorna un mensaje de producto eliminado y luego la lista actualizada, es decir, sin el producto que se elimino anteriormente
        return jsonify({
            'message': 'Product Deleted',
            'products': products
        })
# Aqui se define el puerto en el cual se va a ejecutar los archivos
if __name__ == '__main__':
    app.run(debug=True, port=5000)