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
    <div class="content">
      <h1 class="title">Your posts</h1>
      <div class="tools">
        <ul class="tabs">
          <li class="tab"><a href="#" data-tab="drafts" class="link active">Drafts</a></li>
          <li class="tab"><a href="#" data-tab="published" class="link">Published</a></li>
        </ul>
        <div class="search"><span class="typcn typcn-zoom"></span>
          <input type="search" name="s" placeholder="Search...">
        </div>
      </div>
      <ul id="drafts" class="posts active tabbed">
        <li class="post">
          <div class="date">2/12/2015</div><a href="" class="title">This is an amazing post</a>
          <div class="details">By <a href="#">Asael Jaimes</a> · Filed under <a href="#">Web Design</a></div>
          <ul class="options">
            <li class="option"><a href="" class="link edit"><span class="typcn typcn-edit"></span></a></li>
            <li class="option"><a href="" class="link delete"><span class="typcn typcn-trash"></span></a></li>
          </ul>
        </li>
        <li class="post">
          <div class="date">2/12/2015</div><a href="" class="title">This is an amazing post</a>
          <div class="details">By <a href="#">Asael Jaimes</a> · Filed under <a href="#">Web Design</a></div>
          <ul class="options">
            <li class="option"><a href="" class="link edit"><span class="typcn typcn-edit"></span></a></li>
            <li class="option"><a href="" class="link delete"><span class="typcn typcn-trash"></span></a></li>
          </ul>
        </li>
        <li class="post">
          <div class="date">2/12/2015</div><a href="" class="title">This is an amazing post</a>
          <div class="details">By <a href="#">Asael Jaimes</a> · Filed under <a href="#">Web Design</a></div>
          <ul class="options">
            <li class="option"><a href="" class="link edit"><span class="typcn typcn-edit"></span></a></li>
            <li class="option"><a href="" class="link delete"><span class="typcn typcn-trash"></span></a></li>
          </ul>
        </li>
      </ul>
      <ul id="published" class="posts tabbed">
        <li class="post">
          <div class="date">2/12/2015</div><a href="" class="title">This is a published post</a>
          <div class="details">By <a href="#">Asael Jaimes</a> · Filed under <a href="#">Web Design</a></div>
          <ul class="options">
            <li class="option"><a href="" class="link edit"><span class="typcn typcn-edit"></span></a></li>
            <li class="option"><a href="" class="link delete"><span class="typcn typcn-trash"></span></a></li>
          </ul>
        </li>
        <li class="post">
          <div class="date">2/12/2015</div><a href="" class="title">Published post, man</a>
          <div class="details">By <a href="#">Asael Jaimes</a> · Filed under <a href="#">Web Design</a></div>
          <ul class="options">
            <li class="option"><a href="" class="link edit"><span class="typcn typcn-edit"></span></a></li>
            <li class="option"><a href="" class="link delete"><span class="typcn typcn-trash"></span></a></li>
          </ul>
        </li>
      </ul>
    </div>
    <script type="text/javascript" src="{{ asset('js/all.js') }}"></script>
  </body>
</html>