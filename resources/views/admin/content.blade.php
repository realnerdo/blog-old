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
          <li class="option"><a href="#" class="link"> <span class="typcn typcn-cog"></span>Settings</a></li>
        </ul>
      </nav>
    </aside>
    <div class="content">
      <ul class="posts">
        <li class="post"><a href="#" class="link"> 
            <div class="details">
              <ul class="tags">
                <li class="tag">Life</li>
                <li class="tag draft">Draft</li>
              </ul>
              <div class="date">2/10/2015</div>
            </div>
            <div class="title">The Amazing Spider-Man</div></a></li>
        <li class="post"><a href="#" class="link"> 
            <div class="details">
              <ul class="tags">
                <li class="tag">Life</li>
                <li class="tag draft">Draft</li>
              </ul>
              <div class="date">2/10/2015</div>
            </div>
            <div class="title">The awesome art of origami</div></a></li>
        <li class="post"><a href="#" class="link"> 
            <div class="details">
              <ul class="tags">
                <li class="tag">Life</li>
              </ul>
              <div class="date">2/10/2015</div>
            </div>
            <div class="title">This is an incredible long title for a post</div></a></li>
        <li class="post"><a href="#" class="link"> 
            <div class="details">
              <ul class="tags">
                <li class="tag">Life</li>
                <li class="tag draft">Draft</li>
              </ul>
              <div class="date">2/10/2015</div>
            </div>
            <div class="title">My trip to Asia</div></a></li>
        <li class="post"><a href="#" class="link"> 
            <div class="details">
              <ul class="tags">
                <li class="tag">Life</li>
              </ul>
              <div class="date">2/10/2015</div>
            </div>
            <div class="title">Stay hungry, stay foolish</div></a></li>
        <li class="post"><a href="#" class="link"> 
            <div class="details">
              <ul class="tags">
                <li class="tag">Life</li>
                <li class="tag draft">Draft</li>
              </ul>
              <div class="date">2/10/2015</div>
            </div>
            <div class="title">This is my legacy</div></a></li>
        <li class="post"><a href="#" class="link"> 
            <div class="details">
              <ul class="tags">
                <li class="tag">Life</li>
              </ul>
              <div class="date">2/10/2015</div>
            </div>
            <div class="title">The Amazing Spider-Man</div></a></li>
        <li class="post"><a href="#" class="link"> 
            <div class="details">
              <ul class="tags">
                <li class="tag">Life</li>
              </ul>
              <div class="date">2/10/2015</div>
            </div>
            <div class="title">The awesome art of origami</div></a></li>
        <li class="post"><a href="#" class="link"> 
            <div class="details">
              <ul class="tags">
                <li class="tag">Life</li>
              </ul>
              <div class="date">2/10/2015</div>
            </div>
            <div class="title">This is an incredible long title for a post</div></a></li>
        <li class="post"><a href="#" class="link"> 
            <div class="details">
              <ul class="tags">
                <li class="tag">Life</li>
              </ul>
              <div class="date">2/10/2015</div>
            </div>
            <div class="title">My trip to Asia</div></a></li>
        <li class="post"><a href="#" class="link"> 
            <div class="details">
              <ul class="tags">
                <li class="tag">Life</li>
              </ul>
              <div class="date">2/10/2015</div>
            </div>
            <div class="title">Stay hungry, stay foolish</div></a></li>
        <li class="post"><a href="#" class="link"> 
            <div class="details">
              <ul class="tags">
                <li class="tag">Life</li>
                <li class="tag draft">Draft</li>
              </ul>
              <div class="date">2/10/2015</div>
            </div>
            <div class="title">This is my legacy</div></a></li>
      </ul>
      <div class="preview">
        <div class="options"><a href="#" class="btn blue">Edit</a></div>
        <div class="body editable">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </div>
    </div>
    <script type="text/javascript" src="{{ asset('js/all.js') }}"></script>
  </body>
</html>