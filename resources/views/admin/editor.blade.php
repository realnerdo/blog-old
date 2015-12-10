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
    <div class="content">{!! Form::open(['url' => url('admin/test'), 'class' => 'form']) !!}
      <div class="editor">
        <div class="title">
          <div class="options"><a href="#" class="settings open-panel"><span class="typcn typcn-cog"></span></a>
            <input type="submit" value="Publish" class="btn blue publish">
          </div>
          <input id="input-title" type="text" name="title" placeholder="Your post title">
        </div>
        <div class="body">
          <textarea name="body" class="editable">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
        </div>
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
          {!! Form::label('twitter', 'Post to twitter', ['class' => 'label']) !!}
          {!! Form::checkbox('twitter', 1, null, ['class' => 'onoffswitch']) !!}
        </div>
        <div class="group">{!! Form::select('age', ['Under 18', '19 to 30', 'Over 30'], null, ['class' => 'select']) !!}</div>
      </div>{!! Form::close() !!}
    </div>
    <script type="text/javascript" src="{{ asset('js/all.js') }}"></script>
  </body>
</html>