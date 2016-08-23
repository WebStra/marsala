<!DOCTYPE html>
<html>
<body>
<h4>3e-book Gratuit</h4>
<p>Salut {{$book->name}}!</p>
<p>Speram ca o sa va fie de folos cartile!</p>
@foreach($books as $item)
	<a href="{{ $item->path }}">{{ $item->original_name }}</a>
@endforeach
</body>
</html>