Rails.application.routes.draw do
    root to: 'pages#home'
    get 'about', to: 'pages#about'
    get 'faq', to: 'pages#faq'
    resources :contacts, only: :create
    get 'contact-us' , to: "contacts#new" , as: 'new_contact'
end
