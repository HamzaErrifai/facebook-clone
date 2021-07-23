<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">

</head>

<body>
    <div id="main"></div>
    <script>
        window.Laravel = {!! json_encode([
    'csrftoken' => csrf_token(),
    'url' => url('/'),
    'user' => Auth::user()?->name,
    'posts' => [],
]) !!};
    </script>
    <script src="https://kit.fontawesome.com/873e4afb32.js" crossorigin="anonymous"></script>
    <script src="{{ mix('js/app.js') }}"></script>

</body>

</html>
