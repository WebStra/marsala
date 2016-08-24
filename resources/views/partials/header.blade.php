<header class="">

    <div class="parallax-viewport" id="parallax">

        <img class="bg" src="/assets/images/bg-header.jpg" alt="">

        <img class="parallax-layer" src="/assets/images/icons-big.png" alt=""/>

        <img class="parallax-layer" src="/assets/images/icons-medium.png" alt=""/>

        <img class="parallax-layer" src="/assets/images/icons-small.png" alt=""/>

    </div>

    <!-- /#parallax -->

    <div class="text">

        <div class="wrap-logo">

            <img src="/assets/images/logo.png" alt="">

        </div>

        <h2>{{$meta->getMeta('cover_has')}}</h2>

        <h3>{{$meta->getMeta('cover_label')}}</h3>

        <form action="{{ route('subscribe') }}" method="post" class="form-subscribe">

            <div class="form-group">

                <input type="email" name="email" required placeholder="{{$meta->getMeta('cover_input')}}">

                {{csrf_field()}}

                <button type="submit" class="btn btn-first">{{$meta->getMeta('cover_submit')}}</button>

            </div>

        </form>

    </div>

</header><!-- /.header -->

<!-- /.header-container -->