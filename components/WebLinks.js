// Weblinks Page Sections
// created by @agcrisbp
// date: 29 Jul, 2022

import Image from "next/image";
import styled from "styled-components";
import { Button, ButtonLink, Container, StyledLink } from "./ReusableStyles";
import Link from "next/link";
import { HexIcon, HomeIcon, NewUp, OvalIcon } from './icons';
import allLinks from "../data/LinksData";
import bioData from "../data/BioData";
import Online from "../components/Online";
import { Icon } from '@iconify/react';



const Links = () => {

  // all user info from bioData
  const name = bioData[0].name;
  const url = bioData[0].url;
  const online = bioData[0].online;
  const titleImg = bioData[0].titleImg;
  const avatarImg = bioData[0].avatar;
  const description = bioData[0].description;
  const descShow = bioData[0].descShow;
  const subdesc = bioData[0].subdesc;
  const subdescShow = bioData[0].subdescShow;
  const titleImage = "/logo.png";

  // Check what class to use oval or hex for avatar
  const avatarShape = bioData[0].nftAvatar ? `nft-clipped` : `oval-clipped`


  // Description and subdescription goes here
  const descriptionText = descShow ? description : ``
  const subdescText = subdescShow ? subdesc : ``
  
  const bsky = bioData[0].bsky;
  const bskyUname = bioData[0].bskyUname;
  const bskyTheme = bioData[0].bskyTheme;
  
  const tweet = bioData[0].tweet;
  const tweetText = bioData[0].tweetText;
  const tweetUrl = bioData[0].tweetUrl;
  const tweetTheme = bioData[0].tweetTheme;
  
  const ig = bioData[0].ig;
  const igUrl = bioData[0].igUrl;
  const igPost = bioData[0].igPost;
  const igPostUrl = bioData[0].igPostUrl;
  
  const spotify = bioData[0].spotify;
  const spotifyText = bioData[0].spotifyText;
  const spotifyUrl = bioData[0].spotifyUrl;
  const spotifyImg = bioData[0].spotifyImg;


  // Collect all links filter by type - social, project, nft and other etc=
  // get data for social section
  const social = allLinks.filter((el) => {
    return el.type === "social" && el.on
  });

  // Get data for nfts
  const nfts = allLinks.filter((el) => {
    return el.type === "nft" && el.on
  });
  

  // Get data for other section
  const other = allLinks.filter((el) => {
    return el.type === "other" && el.on
  });

  return (
    <LinkWrapper>
      <LinkContainer>
        <TopPart>
          <LinkHeader>
            <Avatar>
              <AvatarWrap>
                {/* Avatar svg  hex or oval if nftAvatar=true will convert to hex */}
                <HexIcon />
                <OvalIcon />
                <div className={`${avatarShape} avatar-border`}></div>
                <div className={`${avatarShape} avatar-fill`}></div>
                <img
                  src={avatarImg}
                  className={avatarShape}
                />
              </AvatarWrap>
            </Avatar>
            <Title>
              {/* Using titleimg flag to use image as title or text */}
              {titleImg ?
                <img src={titleImage} className="handle" /> :
                <h1>{name}</h1>
              }
              {/* if your remove username from data it will not appear */}
              {
                online ? <h3><a href={`${url}`}><Online /></a></h3> : ''
              }
            </Title>
          </LinkHeader>

          {/* Bio Section */}
          <LinkBio>
            {description && <h1>{descriptionText} </h1>}
            {subdesc && <h4>{subdescText}</h4>}
          </LinkBio>
          {/* End Bio Section */}

          {/* Weblinks started */}
          <WebLinkWrap>
            {/* Social Icon */}
            <LinkSection className="social">
              <div className="iconsonly">
                {
                  social.map((i) => {
                    return (
                      <a href={i.url} key={i.title} target="_blank" rel="noreferrer">
                        <LinkBox className="socialIcon">
                          <Icon icon={i.icon} height={20} width={20} style={{ filter: 'var(--icon)'}} />
                        </LinkBox>
                      </a>
                    )
                  })
                }
              </div>
             </LinkSection>
             <LinkSection>
             {(spotify) ?
                <a href={spotifyUrl} target="_blank" rel="noreferrer"><h3>{spotifyText}</h3>
                  <img
                    src={`${spotifyImg}`}
                    className="custom"
                  />
                </a> : ''
              }
              </LinkSection>
              <LinkSection>
              <h3>{other[0].type}</h3>
              {
                other.map((i) => {
                  return (
                    <a href={i.url} key={i.title} target="_blank" rel="noreferrer">
                      <LinkBox>
                        <LinkTitle>
                          <Icon icon={i.icon} height={20} width={20} style={{ filter: 'var(--icon)', marginRight: '10px' }} /> {i.title}</LinkTitle> <NewUp />
                      </LinkBox>
                    </a>
                  )
                })
              }
              </LinkSection>
              <LinkSection>
              {(ig) ?
                <a><details>
                <summary><h3>Instagram Profile</h3></summary>
                <iframe src={igUrl} width="100%" height="380" theme="dark" frameborder="0" scrolling="yes" allowtransparency="true"><h3>Loading Instagram Profile...</h3></iframe>
                </details></a>:''
              }
              </LinkSection>
              <LinkSection>
              {(igPost) ?
                <a><details>
                <summary><h3>Instagram Post</h3></summary>
                <iframe src={igPostUrl} width="100%" height="380" theme="dark" frameborder="0" scrolling="yes" allowtransparency="true"><h3>Loading Instagram Profile...</h3></iframe>
                </details></a>:''
              }
            </LinkSection>
            <LinkSection>
              {(tweet) ?
                <a><details>
                <summary><h3>𝕏 Tweets</h3></summary>
                <a class="twitter-timeline" href={tweetUrl} data-height="350" data-chrome="noheader nofooter noscrollbar" data-tweet-limit="1" data-theme={tweetTheme}>
                <LinkFoot><h4>
                Loading...
                </h4></LinkFoot>
                </a></details></a> :''
              }
            </LinkSection>
              <LinkSection>
              {(bsky) ?
                <a><details>
                <summary><h3>Bluesky Timeline</h3></summary>
                <bsky-embed
                  username={bskyUname}
                  feed="at://...(decide between username, feed, or search)"
                  search="#BuildInPublic (decide between username, feed, and search)"
                  mode={bskyTheme}
                  limit="1"
                  link-target="_blank"
                  link-image="true"
                  load-more="true"
                  custom-styles=".border-slate-300 { border-color: purple; }"
                >
                </bsky-embed> </details></a> :''
              }
            </LinkSection>
            {/* Social Icon */}

            {/* NFT Section */}
            {
              nfts.length > 0 ?
                <LinkSection className="social">
                  <h3>{nfts[0].type}s</h3>
                  {
                    nfts.map((i) => {
                      return (
                        <a href={i.url} key={i.title} target="_blank" rel="noreferrer">
                          <LinkBox>
                            <LinkTitle><img src={i.icon} style={{ filter: 'var(--img)' }} /> {i.title}</LinkTitle> <NewUp />
                          </LinkBox>
                        </a>
                      )
                    })
                  }
                </LinkSection>
                : ''
            }
            {/* End NFT Section */}

          </WebLinkWrap>
          {/* End Weblinks */}
        </TopPart>
        <BottomPart>
          <LinkFoot>
            <h4>Powered by <a href="https://ad-link-docs.vercel.app/" target="_blank">ADLink</a>.</h4>
          </LinkFoot>
        </BottomPart>

      </LinkContainer>
    </LinkWrapper>

  )
};

export default Links;

const LinkWrapper = styled(Container)`
`
const LinkContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 24px;
`

const LinkHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 12px;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
       margin-top: 20px;
    }
`

const Avatar = styled.div`
    height: 90px;
    width: 90px;
    position: relative;
    margin-bottom: 12px;
`

const AvatarWrap = styled.div`
   height: 100%;
   width: 100%;
   filter: drop-shadow(0px 1px 2px var(--avatar-shadow));
   img{
    height: calc(100% - 6px);
    width: calc(100% - 6px);
   }
   .avatar-border{
        height: 100%;
        width: 100%;
        position: absolute;
        background: ${({ theme }) => theme.bg.primary};
   }
   .avatar-fill{
        height: calc(100% - 6px);
        width: calc(100% - 6px);
        position: absolute;
        background: ${({ theme }) => theme.bg.primary};
   }
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
      font-size: 38px;
      font-weight: 700;
      
      letter-spacing: -2px;
      background: linear-gradient(90deg, #4AB1F1 5.71%, #566CEC 33.77%, #D749AF 61.82%, #FF7C51 91.21%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 32px;
      }
    }
    h3{
      margin-top:6px;
      font-size: 18px;
      font-weight: 500;
      letter-spacing: -.7px;
      color: ${({ theme }) => theme.text.secondary};
      opacity: .5;
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 15px;
        margin-top:2px;
      }
    }
    
 
    .name{
      margin-top: 8px;
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        width: 140px;
      }
    }
    .handle{
      height: 32px;
      margin-top: 6px;
      margin-bottom: 6px;
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        height: 26px;
      }
    }
`

const LinkBio = styled.div`
    display: flex;
    flex-direction: column;
    h1{
      font-size: 22px;
      line-height: 30px;
      font-weight: 500;
      letter-spacing: -0.6px;
      padding: 0 20px;
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 18px;
        line-height: 26px;
        padding: 0 8px;

      }
      vertical-align: middle;
      span{
        font-size: 12px;
        vertical-align: bottom;
        line-height: 30px;
        color: ${({ theme }) => theme.text.secondary};
        margin: 0 2px;
        @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
          font-size: 10px;
          line-height: 20px;
        }
      }
    }
    h4{
      font-size: 18px;
      letter-spacing: -.5px;
      margin: 10px 0;
      color: ${({ theme }) => theme.text.secondary};
      font-weight: 500;
        @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
          font-size: 15px;
          padding: 0 20px;
          line-height: 24px;
        }
      a{
         font-weight: 700;
         opacity: .7;
         &:hover{
          opacity: 1;
         }
      }
    }

`

const TopPart = styled.div`
    
`



const BottomPart = styled.div`
    margin-bottom: 40px;
    
`
const LinkFoot = styled.div`
    h4{
      color: ${({ theme }) => theme.text.secondary};
      line-height: 32px;
      letter-spacing: -.2px;
      font-size: 16px;
      font-weight: 500;
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 12px;
      }
      span{
        font-size: 10px;
        vertical-align: bottom;
        line-height: 32px;
        margin: 0 2px;
        opacity: .6;
        @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
          font-size: 8px;
        }
      }
    }
`

const WebLinkWrap = styled.div`
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
       padding: 0 12px;
    }
`


const LinkSection = styled.div`
    padding: 12px 0;
    display: flex;
    margin: 0 auto;
    max-width: 400px;
    flex-direction: column;
    &.social{
      max-width: max-content;
      padding: 0;
      margin-bottom: 18px;
    }
    .iconsonly{
      display: flex;
      justify-content: center;
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        flex-wrap: wrap;
      }
    }
    h3{
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 4px;
      margin-bottom: 4px;
      color: ${({ theme }) => theme.text.secondary};
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        font-size: 11px;
      }
    }
`

const LinkBox = styled.div`
    padding: 18px 20px;
    border-radius: 12px;
    margin: 8px 18px;
    border: 1px solid ${({ theme }) => theme.bg.secondary};
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -.5px;
    position: relative;
    text-align: center;
    position: relative;
    
    &::before{
      content: "";
      border-radius: 12px;
      display: block;
      position: absolute;
      z-index: -1;
      inset: -2px;
      opacity: 0;
      transform: scale(0.8);
    }
    &:hover{
    transition: all 333ms ease 0s;
    border-color: transparent;
      &::before{
        opacity: 1;
        background: ${({ theme }) => theme.bg.hover};
        transition: all 333ms ease 0s;
        transform: scale(1);
      }
    }
    .new-up{
      transform: scale(.8);
      opacity: .7;
    }
    
    &.socialIcon{
      padding: 16px;
      border-radius: 50%;
      border: none;
      margin: 4px;
      img{
        height: 24px;
      }
     
      @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
        padding: 10px;
        margin: 2px;
        img{
          height: 20px;
        }
      }
    }
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
      padding: 12px 16px;
      font-size: 16px;
    }
`
const LinkTitle = styled.div`
  display: flex;
  font-size: 18px;
  align-items: center;
    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
      font-size: 14px;
    }
    img{
      height: 20px;
      margin-right: 10px;
    }
`

const NewSection = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
    img{
      width: 100%;
      border: 1px solid ${({ theme }) => theme.bg.secondary};
      border-radius: 12px;
      cursor: pointer;
      &:hover{
       transform: scale(1.01);
      }
    }
`