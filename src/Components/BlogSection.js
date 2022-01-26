import React from 'react';
import styled from 'styled-components';
import { SectionStyled } from '../Layouts';
import MainTitle from './MainTitle';
import blogs from '../blogs';
const BlogSection = () => {
    return (
        <BlogSectionStyled>
            <SectionStyled>
                <div className='title-container'>
                    <MainTitle title={'Popular Blogs'} subtitle={'Our Top Blogs'} para={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id unde officiis hic nihil quasi soluta ex corrupti nesciunt dolorem. Cumque obcaecati sint officiis quis laboriosam vitae, error molestiae temporibus voluptatum consectetur.'}/>
                </div>
                <div className='blogs'>
                    {
                        blogs.map((blog) => {
                            return <div className='blog' key={blog.id}>
                            <div className='image'>
                                <img src={blog.image} alt=''/>
                            </div>
                            <h6>{blog.title}</h6>
                            <div className='user'>
                                <p>Creator</p>
                                <p>{blog.name}</p>
                            </div>
                            </div>
                        })
                        
                    }
                </div>
            </SectionStyled>
        </BlogSectionStyled>
    )
}

const BlogSectionStyled = styled.div`
    .title-container{
            text-align: center;
            justify-content: center;
            width: 100%;
        }
    .blogs{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 2rem;
        padding-top: 2rem;
        @media(max-width: 900px){
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            width: 100%;
            
        }
        @media(max-width: 540px) and (min-width: 365px){
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: center;
            width: 100%;
    
        }
            h6{
                font-size: .8rem;
                font-weight: 400;
                text-align: center;
                align-items: center;
                justify-content: center;
            }
            .user{
                align-items: center;
                justify-content: center;
                text-align: center;
                font-weight: 400;
                font-size: .8rem;
            }
            
        }

        .blog{
            background: rgba(255, 255, 255, 0.03);
            border-radius: 20px;
            width: 100%;
            .image{
                height: 300px;
                width: 100%;
                overflow: hidden;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
                transition: .4s ease-in-out all;
                img{
                    height: 100%;
                    width: 100%;
                    border-top-left-radius: 20px;
                    border-top-right-radius: 20px;
                    transition: all .4s ease-in-out;
                    object-fit: cover;
                    filter: grayscale(80%);
                    &:hover{
                        filter: grayscale(0);
                        transform: scale(1.2) rotate(8deg);
                    }
                }
            }

            h6{
                font-weight: 500;
                font-size: 1.1rem;
                padding-top: 1rem;
                padding-left: 1rem;
                padding-right: 1rem;

            }
            .user{
                padding-top: .2rem;
                padding-bottom: 1.5rem;
                padding-right: 1rem;
                padding-left: 1rem;
                display: flex;
                p:first-child{
                    padding-right: 0.4rem;
                    opacity: 0.5;
                }
                p{
                    font-size: 1rem;
                }
                
            }
        }
    }

`;

export default BlogSection
