<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="{{ asset('css/all.css') }}">
    <link rel="stylesheet" href="{{ asset('bower/typicons.font/src/font/typicons.min.css') }}">
    <title>Admin</title>
  </head>
  <body>
    <aside class="sidebar">
      <div class="profile">
        <div class="photo"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/allisongrayce/48.jpg" class="img"></div>
        <div class="title">Personal Blog</div>
        <div class="name">Brenda Graham</div><span class="typcn typcn-arrow-sorted-down"></span>
      </div>
      <div class="search"><span class="typcn typcn-zoom"></span>
        <input type="search" name="s" placeholder="Buscar...">
      </div>
      <nav class="nav">
        <ul class="options">
          <li class="option"><a href="#" class="link"> <span class="typcn typcn-pen"></span>New Post</a></li>
          <li class="option"><a href="#" class="link"> <span class="typcn typcn-document-text"></span>Content</a></li>
          <li class="option"><a href="#" class="link"> <span class="typcn typcn-user"></span>Team</a></li>
          <li class="option"><a href="#" class="link"> <span class="typcn typcn-cog"></span>Settings</a></li>
        </ul>
      </nav>
    </aside>
    <div class="editor">Editor</div>
  </body>
</html>