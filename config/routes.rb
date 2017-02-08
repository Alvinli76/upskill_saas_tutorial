Rails.application.routes.draw do
    root to: 'pages#home'
    get 'about', to: 'pages#about'
    get 'faq', to: 'pages#faq'
    resources :contacts
    get 'contact-us' , to: "contacts#new"
end
