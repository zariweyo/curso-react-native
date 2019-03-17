## APIs 3
* Geolocation

Aunque React Native dispone de un api específica para Geolocation (navigator.geolocation), en la misma documentación se hace referencia el proyecto react-native-geolocation-service [https://github.com/Agontuk/react-native-geolocation-service](https://github.com/Agontuk/react-native-geolocation-service) , que es el que usaremos aqui:

`npm install react-native-geolocation-service`

## Instalacion iOS
No hay que hacer nada, simplemente añadir en Info.plist lo que se indica en [https://facebook.github.io/react-native/docs/geolocation.html#ios](https://facebook.github.io/react-native/docs/geolocation.html#ios)

* Añadir una cadena de texto a la clave NSLocationWhenInUseUsageDescription, que se mostrará al usuario, en el fichero Info.plist. quedaría así:
`
    <key>NSLocationWhenInUseUsageDescription</key>
	<string>Esta aplicación necesita permisos para poder acceder a su posición GPS</string>
`

## Instalacion Android
Seguir los pasos de https://github.com/Agontuk/react-native-geolocation-service#android

Además, es conveniente añadir los permisos en AndroidManifest.xml:
`
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
`



[Volver](https://github.com/zariweyo/curso-react-native)
