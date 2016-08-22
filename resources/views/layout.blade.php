<!doctype html>
@include('partials.dependences')
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @include('partials.css')
</head>
<body>

@include('errors.ie_8_version_error')

<div class="main-wrapper">
    @include('partials.header')

    @yield('content')

    @include('partials.footer')
</div>

@include('partials.js')
@yield('js')
</body>
</html>


