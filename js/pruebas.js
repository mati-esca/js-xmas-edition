function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos un caracter',
      'Validar nombre no validó que el nombre no sea vacío',
    );

    console.assert(
        validarNombre(
        '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres'
    );
    console.assert(
        validarNombre('Matias') === '',
        'Validar nombre fallo con un nombre valido'
    );
    console.assert(
        validarNombre('99999') === 'El campo solo acepta letras',
        'Validar nombre no validó que nombre sea solo letras'
    );
}

probarValidarNombre();

function probarValidadCiudad() {
    console.assert(
        validarCiudad('') === 'Debe seleccionar una ciudad', 
        'Validar ciudad no validó que el valor de ciudad no sea vacío'
    );
    console.assert(
        validarCiudad('Formosa') === '',
        'Validar ciudad fallo con una ciudad valida'
    );
}
probarValidadCiudad();

function probarvalidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 'Este campo debe tener menos de 100 caracteres', 'Validar descripción regalo no validó que la descripción sea menor a 100 caracteres'
    );
    console.assert(
        validarDescripcionRegalo('') === 'Este campo debe tener al menos un caracter', 'Validar descripción regalo no validó que el campo no sea vacío'
    );
    console.assert(
        validarDescripcionRegalo('Un regalo muy lindo y especial') === '',
        'Validar descripcion regalo fallo con una descripcion valida'
    );
    console.assert(
        validarDescripcionRegalo('.......,,,,') === 'El campo descripcion solo puede tener números y letras',
        'Validar descripcion regalo no validó que la descripcion sea solo numeros y letras'
    );
}

probarvalidarDescripcionRegalo();
