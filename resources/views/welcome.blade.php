@extends('layout')

@section('content')
    <div class="main-container">
        <section class="info-top">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-10 col-xs-12 offset-xl-1">
                        <div class="row">
                        @foreach($offer as $ofert)
                            <div class="item col-lg-4 offset-lg-0 col-md-5 offset-md-1 col-sm-8 offset-sm-2 ">
                                <h3>
                                    <img src="{{$ofert->image}}" alt="img">
                                    {!!$ofert->title!!}
                                </h3>
                                {!!$ofert->body!!}
                            </div><!-- /.item -->
                        @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- / section.info-top -->

        @if(count($marketings))
            @include('partials.marketings')
        @endif
        <section class="slider">
            <div class="container-fluid">
                <h2 class="title">{!!$meta->getMeta('web_title')!!}</h2>
                <h4 class="subtitle">{!!$meta->getMeta('web_title')!!}</h4>
            </div>
            <div class="wrap-carousel">
                <div class="monitor">
                    <span class="prev"></span>
                    <span class="next"></span>
                </div>
                <div id="carousel">
                @foreach($webdesign as $web)
                    <img src="{{$web->image}}"/>
                @endforeach
                </div>
            </div>
        </section>
        <!-- / section.slider -->

        <section class="consulting">
            <div class="container-fluid">
                <h2 class="title">{{$meta->getMeta('consultanta_title')}}</h2>
                <h4 class="subtitle">{{$meta->getMeta('consultanta_text')}}</h4>
                <ul>
                @foreach($consultanta as $consult)
                    <li>
                        <div class="item">
                            <span class="wrap-ico"><i></i></span>
                            <p>{!!$consult->title!!}</p>
                        </div>
                    </li>
                @endforeach
                </ul>
                <h3>{{$meta->getMeta('consultanta_text_bottom')}}</h3>
                <a href="/images/ico-user.jpg" class="btn btn-second" download>{{$meta->getMeta('button_download')}}</a>
            </div><!-- /.container-fluid -->
        </section>
        <!-- / section.consulting -->


        <section class="strategies">
            <div class="container-fluid">
                <h2 class="title">{{$meta->getMeta('strategy_title')}}</h2>
                <h4 class="subtitle">{{$meta->getMeta('strategy_text')}}</h4>
                <div class="wrap-elements">
                    <ul class="center-block">
                    
                        <li>{{$meta->getMeta('str_1')}}</li>
                        <li>{{$meta->getMeta('str_2')}}</li>
                        <li>{{$meta->getMeta('str_3')}}</li>
                        <li>{{$meta->getMeta('str_4')}}</li>
                        <li>{!!$meta->getMeta('str_5')!!}</li>
                        
                    </ul>
                    @foreach($strategies as $strategy)
                    <div class="item">
                        <i><img src="{{$strategy->icon}}"></i>
                        <h5>{!!$strategy->name!!}</h5>
                        {!!$strategy->body!!}
                    </div>
                    @endforeach
                </div>
            </div><!-- /.container-fluid -->
        </section>
        <!-- /section.stategies -->

        <section class="formular">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-7 offset-md-1 col-xs-12">
                        <h2 class="title">{{$meta->getMeta('book_title')}}</h2>
                        <ul class="items">
                            <li><i></i>{{$meta->getMeta('book_nr_1')}}</li>
                            <li><i></i>{{$meta->getMeta('book_nr_2')}}</li>
                            <li><i></i>{{$meta->getMeta('book_nr_3')}}</li>
                        </ul>
                    </div>
                    <div class="col-md-4 col-xs-12">
                        <div class="wrap-form">
                            <h4>{{$meta->getMeta('tincearca_title')}}</h4>
                            <form action="" method="post">
                                <div class="form-group">
                                    <label for="name">{{$meta->getMeta('name')}}</label>
                                    <div class="wrap-input">
                                        <input type="text" name="name" id="name">
                                       <!--   <span class="valid active"></span> 
                                       <span class="error "></span> -->
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="email">{{$meta->getMeta('email')}}</label>
                                    <div class="wrap-input">
                                        <input type="email" name="email" id="email">
                                        <!-- <span class="valid"></span>
                                        <span class="error active"></span> -->
                                    </div>
                                </div>
                                {{csrf_field()}}
                                <div class="form-group">
                                    <button type="submit" class="downloadBook btn btn-second">{{$meta->getMeta('download')}}</button>
                                </div>
                                <i class="response"></i>
                            </form>
                        </div>
                    </div>
                </div>
            </div><!-- /.container-fluid -->
        </section>
        <!-- /section.formular -->

    </div> <!-- /.main-container -->

@endsection