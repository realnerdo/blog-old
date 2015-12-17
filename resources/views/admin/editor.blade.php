<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="{{ asset('css/all.css') }}">
    <link rel="stylesheet" href="{{ asset('bower/typicons.font/src/font/typicons.min.css') }}">
    <link rel="stylesheet" href="{{ asset('bower/font-awesome/css/font-awesome.min.css') }}">
    <title>Admin</title>
  </head>
  <body>
    <aside class="sidebar">
      <div class="profile">
        <div class="details">
          <div class="photo"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/allisongrayce/48.jpg" class="img"></div>
          <div class="title">Personal Blog</div>
          <div class="name">Brenda Graham</div><span class="typcn typcn-arrow-sorted-down"></span>
        </div>
      </div>
      <nav class="nav">
        <ul class="options">
          <li class="option"><a href="#" class="link active"> <span class="typcn typcn-pen"></span>New Post</a></li>
          <li class="option"><a href="#" class="link"><span class="typcn typcn-document-text"></span>Content</a></li>
          <li class="option"><a href="#" class="link"> <span class="typcn typcn-cog"></span>Settings</a></li>
        </ul>
      </nav>
    </aside>
    <div class="content">{!! Form::open(['url' => url('admin/store'), 'class' => 'form', 'files' => true]) !!}
      <div class="editor">
        <div class="title">
          <div class="options"><a href="#" class="settings open-panel"><span class="typcn typcn-cog"></span></a>
            <input type="submit" value="Publish" class="btn blue publish">
          </div>{!! Form::text('title', null, ['placeholder' => 'Your article title', 'id' => 'input-title']) !!}
        </div>
        <div class="body">{!! Form::textarea('body', null, ['class' => 'editable']) !!}</div>
      </div>
      <div class="panel page-settings">
        <h2 class="title">Page Settings
          <button class="btn green close-panel">Close</button>
        </h2>
        <div class="group">
          {!! Form::label('cover', 'Cover image', ['class' => 'label']) !!}
          {!! Form::file('cover', ['class' => 'file img']) !!}
        </div>
        <div class="group">
          {!! Form::label('tags', 'Tags', ['class' => 'label']) !!}
          {!! Form::select('tags[]', ($tags ? $tags : null), null, ['class' => 'select2', 'multiple' => true]) !!}
        </div>
        <div class="group">
          {!! Form::label('published_at', 'Publish date') !!}
          {!! Form::text('published_at', \Carbon\Carbon::now('America/Mexico_City')->format('d-m-Y h:m:s A'), ['data-field' => 'datetime', 'readonly' => true, 'class' => 'input']) !!}
        </div>
        <div class="group">
          {!! Form::label('twitter', 'Post to twitter', ['class' => 'label']) !!}
          {!! Form::checkbox('twitter', 1, null, ['class' => 'onoffswitch']) !!}
          <div id="dtBox"></div>
        </div>
      </div>{!! Form::close() !!}
    </div>
    <script type="text/javascript" src="{{ asset('js/all.js') }}"></script>
  </body>
</html>