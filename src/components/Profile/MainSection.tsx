 import React from 'react';

const MainSection: React.FC = () => {
  return (
    <main>
      <div className="profile">
        <div className="details">
          <img src="./images/user-image.jpeg" alt="profile image" />
          <h2>Iuri Silva</h2>
          <p>Single, Brasil</p>
        </div>

        <div className="edit">
          <p>Edit my profile</p>
        </div>
      </div>

      <div className="info">
        <h2>Good Afternoon, Iuri Silva</h2>
        <span id="text">“Programming without coffee is like a poet without poetry.”</span>

        <div className="emojis">
          <div className="division">
            <span>
              <p>Fans</p>
              <span id="star">
                <span className="material-symbols-outlined yellow">
                  star
                </span>
                <p>85</p>
              </span>
            </span>

            <span>
              <p>Reliable</p>
              <span className="material-symbols-outlined yellow">
                sentiment_satisfied
              </span>
              <span className="material-symbols-outlined yellow">
                sentiment_satisfied
              </span>
            </span>
          </div>

          <div className="division">
            <span>
              <p>Cool</p>
              <span className="material-symbols-outlined blue">
                thumb_up
              </span>
              <span className="material-symbols-outlined blue">
                thumb_up
              </span>
              <span className="material-symbols-outlined blue">
                thumb_up
              </span>
            </span>

            <span>
              <p>Sexy</p>
              <span className="material-symbols-outlined pink">
                favorite
              </span>
              <span className="material-symbols-outlined pink">
                favorite
              </span>
            </span>
          </div>
        </div>

        <p>Relationship: <span>Single</span></p>
        <p>Birthday: <span>July, 21</span></p>
        <p>Age: <span>22</span></p>
        <p>Orkut interests: <span>Single</span></p>
        <p>Who am i: <span>Software developer</span></p>
        <p>Children: <span>No</span></p>
        <p>Sex: <span>Male</span></p>
        <p>Smoke: <span>No</span></p>
        <p>Drink: <span>Depends on the day</span></p>
        <p>Live: <span>Guaratã</span></p>
        <p>Country: <span>Brasil</span></p>
        <p>Hometown: <span>São Paulo</span></p>
        <p>
          Musics:
          <span className="border">Trap</span>
          <span className="border more">Rap</span>
          <span className="border more">Indie</span>
          <span className="all">See more</span>
        </p>
        <p>
          Movies:
          <span className="border">The social network</span>
          <span className="border more">My friend Totoro</span>
          <span className="all">See more</span>
        </p>
      </div>

      <div className="friends_community">
        <div className="friends">
          <span className="title">
            <p>Friends (248)</p>
            <p className="all">See more</p>
          </span>

          <div className="profile_friends">
            <div className="division">
              <div className="profile_friend">
                <img src="images/friends/unsplash_2EGNqazbAMk.png" alt="pic_friend" />
                <p>Fernando</p>
              </div>
              <div className="profile_friend">
                <img src="images/friends/unsplash_3TLl_97HNJo.png" alt="pic_friend" />
                <p>Clara</p>
              </div>
              <div className="profile_friend">
                <img src="images/friends/unsplash_d1UPkiFd04A.png" alt="pic_friend" />
                <p>Marcos</p>
              </div>
            </div>
        
            <div className="division">
              <div className="profile_friend">
                <img src="images/friends/unsplash_iFgRcqHznqg.png" alt="pic_friend" />
                <p>Juan</p>
              </div>
              <div className="profile_friend">
                <img src="images/friends/unsplash_j3lf-Jn6deo.png" alt="pic_friend" />
                <p>Gustavo</p>
              </div>
              <div className="profile_friend">
                <img src="images/friends/unsplash_mEZ3PoFGs_k.png" alt="pic_friend" />
                <p>Laura</p>
              </div>
            </div>

            <div className="division">
              <div className="profile_friend">
                <img src="images/friends/unsplash_QJEVpydulGs.png" alt="pic_friend" />
                <p>Ryan</p>
              </div>
              <div className="profile_friend">
                <img src="images/friends/unsplash_ttSRjiYG_WM.png" alt="pic_friend" />
                <p>Karina</p>
              </div>
              <div className="profile_friend">
                <img src="images/friends/unsplash_sibVwORYqs0.png" alt="pic_friend" />
                <p>Jonas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="communitys">
          <span className="title">
            <p>community (35)</p>
            <p className="all">See more</p>
          </span>

          <div className="img_communitys">
            <div className="division">
              <div className="community">
                <img src="images/community/unsplash__4sWbzH5fp8.png" alt="pic_community" />
                <p>Cars</p>
              </div>
              <div className="community">
                <img src="images/community/unsplash_auEPahZjT40.png" alt="pic_community" />
                <p>Food</p>
              </div>
              <div className="community">
                <img src="images/community/unsplash_DomqHKN2Xik.png" alt="pic_community" />
                <p>Anime</p>
              </div>
            </div>

            <div className="division">
              <div className="community">
                <img src="images/community/unsplash_RrhhzitYizg.png" alt="pic_community" />
                <p>Books</p>
              </div>
              <div className="community">
                <img src="images/community/unsplash_rz3eCYGgGSc.png" alt="pic_community" />
                <p>Movies</p>
              </div>
              <div className="community">
                <img src="images/community/unsplash_uTj6-eZeHto.png" alt="pic_community" />
                <p>Lecture</p>
              </div>
            </div>

            <div className="division">
              <div className="community">
                <img src="images/community/unsplash_W0ixyS5kSIk.png" alt="pic_community" />
                <p>Animals</p>
              </div>
              <div className="community">
                <img src="images/community/unsplash_wnXo6T_cb3s.png" alt="pic_community" />
                <p>Art</p>
              </div>
              <div className="community">
                <img src="./images/community/unsplash_zUNs99PGDg0.png" alt="pic_community" />
                <p>Coffe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainSection; 